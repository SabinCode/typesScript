// const [loading, setLoading] = useState(false)

// const { toast } = useToast()

// //npx shadcn@latest add form

// const formSchema = z.object({
//     name: z.string().min(2, "Name must be at least 2 characters").max(50),
//     email: z.string().email("Email must be a valid email"),
//     role: z.string().optional(),
// })

// type FormUser = z.infer<typeof formSchema> //type of formSchema

// const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//         name: "",
//         email: "",
//         role: "",
//     }
// })

// async function getAndSetUsers() {
//     const data = await getUsers()
//     setUsers(data) // aako dat a lai dekhuana setUsers(data) 
// }

// async function onSubmit(values: FormUser) {
//     //console.log( {values}) // checking form values
//     setLoading(true)
//     const res: AxiosResponse<User> = await axios.post("https://66d1dcd162816af9a4f51950.mockapi.io/users",
//         values)

//     await getAndSetUsers() //fresh data tanera rakhna parcha post data render garauna save garnasath
//     setLoading(false)
//     setOpen(false) //cloosing form after saving changes
//     toast({
//         title: "User created",
//         description: "",
//     })
//     form.reset() //clearing form after saving or creating user
// }


// type User = {
//     id: string
//     name: string
//     email: string
//     role: string
//     status: string
//     lastLogin: string
// }
// export function UserForm({ setUsers }: { setUsers: React.Dispatch<React.SetStateAction<User[]>> }) {
//     return (

//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                 <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>name</FormLabel>
//                             <FormControl>
//                                 <Input id="name"
//                                     placeholder='Name'

//                                     className="col-span-3"

//                                     {...field} />
//                             </FormControl>
//                             <FormDescription>
//                                 This is your public display name.
//                             </FormDescription>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>email</FormLabel>
//                             <FormControl>
//                                 <Input id="email"
//                                     placeholder='email'

//                                     className="col-span-3"

//                                     {...field} />
//                             </FormControl>
//                             <FormDescription>
//                                 This is your public display email.
//                             </FormDescription>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="role"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>role</FormLabel>
//                             <FormControl>
//                                 <Input id="role"
//                                     placeholder='role'

//                                     className="col-span-3"

//                                     {...field} />
//                             </FormControl>
//                             <FormDescription>
//                                 This is your public display role.
//                             </FormDescription>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 )
// }