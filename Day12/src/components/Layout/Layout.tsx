import { Link, Outlet } from "react-router-dom"



function Layout() {
    return (
        <>

            <h1>React Router example</h1>
            <br />
            {/* Go to users  ma ckick garda UsersPage ma jane Link banako.
        elmeents  ma check garne ho vane yo link traditionally <a href="Users">Go to Users</a> nai hun6.
        client side routing van6 */}
            <Link to="/Users">Go to Users</Link>
            <br />
            <Link to="/Events">Go to Events</Link>
            <br />
            <Link to="/Users/Sabin">Go to ProfilePage with username</Link>
            <br />
            <Link to="/ProfilePage">Go to ProfilePage</Link>
            <br />
            <Outlet /> {/* This is where the child routes will be rendered. In our case Home , users and events */}

            <a href="https://www.google.com">Google</a> {/* Link to google , external link ko lagi a href use nai garne */}
        </>
    )
}

export default Layout


//ANOTHER APPROACH

// const Links =[{
//     path:"/users",
//     textContent:"go to users"
// },
// {
//     path:"/events",
//     textContent:"go to events"
// },
// {
//     path:"/home",
//     textContent:"go to home"
// },{
//     path:"/users/sabin",
//     textContent:"go to profile"
    
// }, {
//     path:"/profile",
//     textContent:"go to profile"
// }]


// function Layout() {
//     return (
//         <>
//         <h2>React Router example</h2>
//         <Outlet />
//             {Links.map((item)=>(
//                 <Link to={item.path}>{item.textContent}</Link>
//             ))}
//         </>
//     )
// }

// export default Layout