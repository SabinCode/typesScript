import axios from "axios"
import { createContext, useContext, useState } from "react"
import './Context.css'

//creating Users Type after checking network data[{array of objects}] id number vayepani  as string ""aako 6.
type TUsers = {
    id: string;
    name: string;
    email:  string;
    avatar: string;
}


async function getUsers() {
    try {
        const res = await axios.get("https://66d1dcd162816af9a4f51950.mockapi.io/users")
        return res.data  as TUsers[] //users ko data yeha aau6 jasko type network bata hamile tha paisakyo. so we wrote as Tusers[]
    } catch (e) {
        console.error(e) //yesle as red warning  error dincha. console.log(e) le chai  error log gar6
        throw e;
    }
    }


    const ThemeContext = createContext<'light' | 'dark'>("light") //literal type. theme ko type light or dark matra hune vayo not string.
function Context() {
    // const [count , setCount] = useState<number | null >(null) //yesari type define garna par6
    // const  [count , setCount] = useState<string | number>(0)
    // const [count , setCount] = useState<"sabin " | "ram">("ram") //yesari type define garda ki ta ram ki sabin matra initailvalue ma lina payo

    // const [count , setCount] = useState<number>(0)
    const [users, setUsers] = useState<TUsers[] | undefined>(undefined)
    const [theme, setTheme] = useState<"light" | "dark">("light") //literal types either dark or light. initial value light



    //Aerow function. arko function use garda ni  hun6
    const handleUserFetch = async () => {
        const data = await getUsers()
        setUsers(data) //data lai yeha set garem so (handleUserFetch)  Get Users btn lai click garda data lina payo
        //aba network ma data herna sakin6. which is [{array of objects}]. aba tesko  type banauna sakine vayo
        //ani tala users?.map le data render garna sakin6
    }

    //console.log({theme})
    return(
        // state bata theme liyera yei ho context ko value vanera pathaidim
        <ThemeContext.Provider value={theme}> 
        <>

        <h1>hello i am useContext</h1>

        <label><input type="checkbox" checked={theme === "dark" ? true : false} onChange={(e) =>{
            // console.log({e}) //e.target.checked ma actual tick lagako cha choina herna milne roicha. so,
            if(e.target.checked){
                setTheme("dark")
            }else{
                setTheme("light")
            }
        }}  /> Is dark mode? </label> 
        <button onClick={handleUserFetch}>Get Users</button>
        {/* <UsersList users={users} theme = {theme} /> */} 

        {/* ContextAPI bata theme lina payo tala eg props pass nagari.
        theme lai hamile mathi pattiko context ma lift up garem ani pathayem*/}
        <UsersList users={users}  />

        </>
        </ThemeContext.Provider>
    )
}

//theme props bata pass gareko eg.
// //type define garna paryo feri arko component vayera
// type TUserListProps = {
//     users: TUsers[] | undefined;
//     theme: "light" | "dark";
// }

// //creating another component for UsersList maping data ani mathi <UsersList users={users} /> ma pass garem
// function UsersList({users, theme} : TUserListProps) {
//     return (
//         // theme dark huda text color white ani theme white huda tex color  black set garem  
//         <div style={{backgroundColor: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black"}}>  
//             {users?.map((item) =>{
//             return(
//                 <div key={item.id}>
//                     <h1>{item.name}</h1>
//                     <h2>{item.email}</h2>
//                 </div>)})}
//         </div>
//     )
// }


//context api bata theme lina payo tala eg. whithout passing theme props
type TUserListProps = {
    users: TUsers[] | undefined;
}

//usecontext hook ma themeContext pathayem
function UsersList({users} : TUserListProps) {
    const theme = useContext(ThemeContext)
    return (
        // theme dark huda text color white ani theme white huda tex color  black set garem
        //inline css  
        // <div style={{backgroundColor: theme === "dark" ? "black" : "white",
        //  color: theme === "dark" ? "white" : "black"}}>  

         <div className={`user-list-${theme}`}>

        <TitleWrapper title="Students"/>
            {users?.map((item) =>{
            return(
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h2>{item.email}</h2>
                </div>)})}
        </div>
    )
}

type TitleWreapperProps = {
    title: "Users" | "Students"
}
function TitleWrapper({title}: TitleWreapperProps) {
    const theme = useContext(ThemeContext)

    console.log("titlewrapper ma theme ko value", theme) //checking if theme gets its value light or dark
    return (
        <h3>List of all users</h3>
    )
}

export default Context