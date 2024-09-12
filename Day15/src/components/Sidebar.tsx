import { LayoutDashboard, Users, Briefcase, BarChartIcon, Settings } from "lucide-react"
import { Link, Outlet } from "react-router-dom"

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Users, label: 'Users' },
    { icon: Briefcase, label: 'Clients' },
    { icon: BarChartIcon, label: 'Analytics' },
    { icon: Settings, label: 'Settings' },
]


export function Sidebar() {
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
                            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
                        >
                            <item.icon className="h-5 w-5 mr-3" />
                            {item.label}
                        </a>
                    ))}
                </nav> */}

                <nav className="mt-6">
                    <Link to="/dashboard"
                        className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200">
                        <Users className="h-5 w-5 mr-3" />
                        Dashboard
                    </Link>

                    <Link to="/users"
                        className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200">
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