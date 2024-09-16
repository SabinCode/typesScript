import { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoreHorizontal, ArrowUpDown, ChevronDown, ChevronUp, Trash, Edit } from "lucide-react"
import axios, { AxiosResponse } from 'axios'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Label } from 'recharts'

import { date, z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from './ui/form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Loader } from './Loader'
import { useToast } from '@/hooks/use-toast'


// we r fetching users data from mockapi so we don't  need this userData from shadc
// const userData = [
//   { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", lastLogin: "2023-06-01" },
//   { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive", lastLogin: "2023-05-28" },
//   { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Active", lastLogin: "2023-06-02" },
//   { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Manager", status: "Active", lastLogin: "2023-06-01" },
//   { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "User", status: "Active", lastLogin: "2023-05-30" },
// ]

type User = {
    id: string
    name: string
    email: string
    role: string
    status: string
    lastLogin: string
}
async function getUsers() {
    try {
        const res: AxiosResponse<User[]> = await axios.get("https://66d1dcd162816af9a4f51950.mockapi.io/users"
        )
        return res.data
    } catch (e) {
        console.error(e)
        throw e
    }
}

//geting one user with id , tesko lagi id argument ma pathaunu par6
async function getOneUser(id: string) {
    try {
        const res: AxiosResponse<User> = await axios.get(`https://66d1dcd162816af9a4f51950.mockapi.io/users/${id}`
        )
        return res.data
    } catch (e) {
        console.error(e)
        throw e
    }
}


//npx shadcn@latest add form

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50),
    email: z.string().email("Email must be a valid email"),
    role: z.string().optional(),
})

type FormUser = z.infer<typeof formSchema> //type of formSchema



function UserForm({ setUsers, userId, setEditOpen, setAddOpen }: {
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setAddOpen: React.Dispatch<React.SetStateAction<boolean>>; userId?: string
}) {
    const [loading, setLoading] = useState(false)

    const { toast } = useToast()

    const [edituser, setEditUser] = useState<User | null>(null)



    //instead of making 3 states , we r making 1 state for form as object
    // const [formUser, setFormUser] = useState({
    //     name: "",
    //     email: "",
    //     role: "",
    // })


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            role: "",
        },
        values: {
            name: edituser?.name,
            email: edituser?.email,
            role: edituser?.role,
        }
    })

    useEffect(() => {
        if (userId) {
            getOneUser(userId).then((data) =>
                setEditUser(data))
        }
    }, [])
    console.log(edituser)

    async function getAndSetUsers() {
        const data = await getUsers()
        setUsers(data) // aako dat a lai dekhuana setUsers(data) 
    }

    async function onSubmit(values: FormUser) {
        //console.log( {values}) // checking form values
        setLoading(true)

        if (userId) {
            await axios.put(`https://66d1dcd162816af9a4f51950.mockapi.io/users/${userId}`,
                values)
            setEditUser(values)
            setLoading(false)
        } else {
            await axios.post("https://66d1dcd162816af9a4f51950.mockapi.io/users",
                values)
        }

        await getAndSetUsers() //fresh data tanera rakhna parcha post data render garauna save garnasath
        setLoading(false)
        setAddOpen?.(false)
        setEditOpen?.(false)
        //setOpen(false) //cloosing form after saving changes
        toast({
            title: userId ? "User updated!" : "User created!",
            description: "",
        })
        form.reset() //clearing form after saving or creating user

    }
    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>name</FormLabel>
                            <FormControl>
                                <Input id="name"
                                    placeholder='Name'

                                    className="col-span-3"

                                    {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input id="email"
                                    placeholder='email'

                                    className="col-span-3"

                                    {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display email.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>role</FormLabel>
                            <FormControl>
                                <Input id="role"
                                    placeholder='role'

                                    className="col-span-3"

                                    {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display role.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SheetFooter>
                    {/* <SheetClose asChild> */}
                    <Button variant="outline" type="submit" >{loading ? <Loader /> : "Save changes"}</Button>

                    {/* </SheetClose> */}
                </SheetFooter>
            </form>
        </Form>
    )
}

// let a = {"aasdd" : false , "asdd" : true , "asd": false} delting ko eg

export function UsersPage() {
    //   const [users, setUsers] = useState(userData) //shadcn state
    const [users, setUsers] = useState<User[]>([]) //our state for users
    const [sortColumn, setSortColumn] = useState("")
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
    const [searchTerm, setSearchTerm] = useState("")

    const [open, setOpen] = useState(false)

    const [editOpen, setEditOpen] = useState(false)

    const [editUserId, setEditUserId] = useState("")

    const [deleting, setDeleting] = useState<Record<string, boolean>>({})




    // const [errorData, setErrorData] = useState({
    //     name: [{ type: "required ", message: "Please enter a name" }],
    //     email: "",
    //     role: "",
    // })

    const sortedData = [...users].sort((a, b) => {
        if (sortColumn) {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
            if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
        }
        return 0
    })

    //yo frontend ma search garnalai rakhna sakin6, big project ko lagi backend ma garnapar6
    const filteredData = sortedData.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.status.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSort = (column: string) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
        } else {
            setSortColumn(column)
            setSortDirection("asc")
        }
    }


    async function getAndSetUsers() {
        const data = await getUsers()
        setUsers(data) // aako dat a lai dekhuana setUsers(data) 
    }


    //component render hunasath data dekhuana parne hun6 so, we r using useEffect. aako data lai dekhuana state banau . yeha ko funtionalai mathi rakhem for better bcoz we r using for delete also
    useEffect(() => {
        // async function getAndSetUsers() {
        //   const data = await getUsers()
        //   setUsers(data) // aako dat a lai dekhuana setUsers(data) 
        // }

        getAndSetUsers() //getAndSetUsers() is a function , which is called inside useEffect, to render the setUsers(data)
    }, [])

    //console.log({ users }) //to check data in console

    const handleUSerDelete = async (id: string) => {
        // setUsers(users.filter(user => user.id !== id)) //shadcn yesle delete garera setUsers gareko 6, jasle garda delete vako user  remove vayera baki render vaihal6.
        //console.log("delete user with id: ", id) //checking delete users data 

        setDeleting({ ...deleting, [id]: true })
        const res: AxiosResponse<User> = await axios.delete(`https://66d1dcd162816af9a4f51950.mockapi.io/users/${id}`)
        //console.log("delete user response", {res}) //checking delete users response
        //delete vayo vanera response aayepani ui ma delete vako users remove vako xoina tei basira6, yesko lagi getAndSetUsers() function call garda hun6.
        getAndSetUsers()
        setDeleting({ ...deleting, [id]: false })
    }

    const handleEdit = (id: string) => {
        // In a real application, this would open an edit form or modal
        console.log(`Editing user with id: ${id}`)
    }


    // function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     // console.log({e}) //e.target.id ma name ma lekhda name, email lekhda email aa6, bcoz form hamile id tesarinai lekheko 6
    //     const fieldName = e.target.id
    //     const fieldValue = e.target.value

    //     setFormUser({ ...formUser, [fieldName]: fieldValue }) //dynamically name,email,role set gareko
    // }

    //console.log(formUser) //checking form ( name,email,role)value

    //craeting new user
    // async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     const res: AxiosResponse<User> = await axios.post("https://66d1dcd162816af9a4f51950.mockapi.io/users", formUser
    //     )
    //     setFormUser({ name: "", email: "", role: "" }) //form reset gareko save vaisakepaxi
    //     getAndSetUsers()

    //     //console.log("handleFormSubmit axios postresponse", { res }) //checking post users response. response aayepani usersko ui ma add vako xoina , yesko lagi feri getAndSetUsers() function call garda hun6.
    // }

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>

            <div className="mb-4 flex justify-between ">
                <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
                <Sheet
                    open={open}
                    onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            Add User</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Add User</SheetTitle>
                            <SheetDescription>Click Save when you're done.</SheetDescription>
                            <UserForm setUsers={setUsers} />
                        </SheetHeader>
                    </SheetContent>
                </Sheet>




                {/* shadcn bata sheet installl garera code leko */}
                <Sheet open={editOpen}
                    onOpenChange={(value) => {
                        if (!value) {
                            setEditOpen(false);
                            setEditUserId("")
                        }
                        return setEditOpen(value)
                    }}>


                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Edit User</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                                {/* <UserForm setUsers={setUsers} /> */}
                            </SheetDescription>
                            <UserForm
                                setUsers={setUsers}
                                userId={editUserId}
                                setEditOpen={setEditOpen} />
                        </SheetHeader>

                        {/* 
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name"
                                    placeholder='Name'
                                    value={formUser.name}
                                    className="col-span-3"
                                    onChange={handleFormChange} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">
                                    Email
                                </Label>
                                <Input id="email"
                                    placeholder='Email'
                                    value={formUser.email}
                                    className="col-span-3"
                                    onChange={handleFormChange} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="Role" className="text-right">
                                    Role
                                </Label>
                                <Input id="role"
                                    placeholder='Role'
                                    value={formUser.role}
                                    className="col-span-3"
                                    onChange={handleFormChange} />
                            </div>
                        </div> */}

                        {/* <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit" disabled={formUser.name === "" || formUser.email === ""} onClick={handleFormSubmit}>Save changes</Button>
                            </SheetClose>
                        </SheetFooter> */}
                    </SheetContent>
                </Sheet>

            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            <Button variant="ghost" onClick={() => handleSort("name")}>
                                Name
                                {sortColumn === "name" && (
                                    sortDirection === "asc" ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
                                )}
                            </Button>
                        </TableHead>
                        <TableHead>
                            <Button variant="ghost" onClick={() => handleSort("email")}>
                                Email
                                {sortColumn === "email" && (
                                    sortDirection === "asc" ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
                                )}
                            </Button>
                        </TableHead>
                        <TableHead>
                            <Button variant="ghost" onClick={() => handleSort("role")}>
                                Role
                                {sortColumn === "role" && (
                                    sortDirection === "asc" ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
                                )}
                            </Button>
                        </TableHead>
                        <TableHead>
                            <Button variant="ghost" onClick={() => handleSort("status")}>
                                Status
                                {sortColumn === "status" && (
                                    sortDirection === "asc" ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
                                )}
                            </Button>
                        </TableHead>
                        <TableHead>
                            <Button variant="ghost" onClick={() => handleSort("lastLogin")}>
                                Last Login
                                {sortColumn === "lastLogin" && (
                                    sortDirection === "asc" ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
                                )}
                            </Button>
                        </TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell>{user.lastLogin}</TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end space-x-2">

                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => {
                                            setEditOpen(true);
                                            setEditUserId(user.id);
                                        }}
                                    >   Edit </Button>


                                    {/* <Sheet >
                                        <SheetTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <Edit className="h-4 w-4" />
                                                <span className="sr-only">Edit user</span>
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                                <SheetTitle>Edit User</SheetTitle>
                                                <SheetDescription>
                                                    Make changes to your profile here. Click save when you're done.
                                                    {/* <UserForm setUsers={setUsers} /> */}
                                    {/* </SheetDescription>
                                            </SheetHeader>
                                            <div className="bg-pink-500 grid gap-4 py-4">

                                                <UserForm setUsers={setUsers} userId={user.id} />

                                            </div>
                                        </SheetContent>
                                    </Sheet> */}
                                    <Button id = {user.id} variant={"destructive"} size="icon" 
                                        onClick={() => handleUSerDelete(user.id)}
                                    >
                                        <Trash className="h-4 w-4" />
                                        <span className="sr-only">Delete user</span>
                                        {deleting[user.id] ? "Deleting..." : "Delete"}
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

//add user ma user get garera form create gareko, edit ko conditon ma get user with id garera tei form ma display gareko. tesko lagi yeutai form banayera
//add user form patheko user get ko ra edit user ma form pathako with get user id.
//aba edit garda user ko pailako value display garam.. as  values  const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//         name: "",
//         email: "",
//         role: "",
//     },
//     values: {
//         name: edituser?.name,
//         email: edituser?.email,
//         role: edituser?.role,
//     }
// })
//edit gareko kura lai save garna put wala api use garam with  id , kun user lai put gardaicha vanera chinnalai