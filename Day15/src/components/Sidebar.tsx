import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, Briefcase, BarChartIcon, Settings } from "lucide-react"
import { Link, Outlet, useLocation } from "react-router-dom"

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Users, label: 'Users' },
    { icon: Briefcase, label: 'Clients' },
    { icon: BarChartIcon, label: 'Analytics' },
    { icon: Settings, label: 'Settings' },
]


export function Sidebar() {
    const {pathname} = useLocation()
    // console.log({pathname}) to check pathname URL
    return (
        <div className="flex h-screen bg-gray-100">

            <aside className="w-64 bg-white shadow-md">
                <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-800">Analytics</h2>
                </div>
                {/* <nav className="mt-6">
                    {sidebarItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 bg-purple-400transition-colors duration-200 "
                        >
                            <item.icon className="h-5 w-5 mr-3" />
                            {item.label}
                        </a>
                    ))}
                </nav> */}

                <nav className="mt-6">
                    <Link to="/dashboard"
                        className={cn(["flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200", { "bg-purple-500 text-primary-foreground": pathname === '/dashboard'}, ])}>
                        <Users className="h-5 w-5 mr-3" />
                        Dashboard
                    </Link>

                    <Link to="/users"
                        className={cn(["flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200", { "bg-purple-500 text-primary-foreground": pathname === '/users'}, ])}>
                        <Users className="h-5 w-5 mr-3" />
                        Users
                    </Link>
                    <Link to="/Clients"
                        className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200">
                        <Users className="h-5 w-5 mr-3" />
                        Clients
                    </Link>
                    <Link to="/Analytics"
                        className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200">
                        <Users className="h-5 w-5 mr-3" />
                        Analytics
                    </Link>
                    <Link to="/Settings"
                        className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200">
                        <Users className="h-5 w-5 mr-3" />
                        Settings
                    </Link>
                </nav>
            </aside>
            {/* <Outlet /> Route le gherera rakheko inner route harulai outlet ma rakheko. assuming sideBar is our Hero */}
            <Outlet />
        </div>

    )
}

//dashbord ma  select garda select vako dekhana css color state bata dekhauna ta sakin6 tara , refresh garda state udd6. 
//refrheh garda pani rakhnalai Url bata rakkhda ramro. react hook useLocation use garum .
//suruma const a = useLocation() matra garum , uselocation vitra jam, highlight n double click. feri uselocation vitra use garum. ma vako location ma jam , teha hami dekhna 
//sakin6 object {} aaaune roicha
//aba {} object vitra control + space garum. we can see pathname and other details.we need pathname
//console.log({pathname})
//pathname '/dashboard' ani users ma huda '/users' cha.So pathname ko value herera selection garauna milyo
//lib vitra utils 6, tesma cn 6 tesle classValue lin6, classarray vtra, classsobj rakhna mil6. So,
// className={cn(["flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200", { "bg-purple-500 text-primary-foreground": "pathname === '/dashboard'"}, ])}>
//yo css , yo pathname Url huda vane conditionally render garauna milyo.
