import { useState } from 'react'
import { Bar, BarChart, Cell, Pie, PieChart, Line, LineChart, Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { CalendarIcon, LayoutDashboard, Users, Briefcase, BarChart as BarChartIcon, Settings } from 'lucide-react'
import { addDays, format } from 'date-fns'
import { DateRange } from 'react-day-picker'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const userRegistrationData = [
    { name: 'Jan', users: 400 },
    { name: 'Feb', users: 300 },
    { name: 'Mar', users: 200 },
    { name: 'Apr', users: 278 },
    { name: 'May', users: 189 },
    { name: 'Jun', users: 239 },
]

const clientDistributionData = [
    { name: 'Enterprise', value: 400 },
    { name: 'SMB', value: 300 },
    { name: 'Startup', value: 300 },
    { name: 'Individual', value: 200 },
]

const dailyActiveUsersData = [
    { name: '1', users: 4000 },
    { name: '2', users: 3000 },
    { name: '3', users: 2000 },
    { name: '4', users: 2780 },
    { name: '5', users: 1890 },
    { name: '6', users: 2390 },
    { name: '7', users: 3490 },
]

const clientEngagementData = [
    { name: 'Week 1', Enterprise: 4000, SMB: 2400, Startup: 2400 },
    { name: 'Week 2', Enterprise: 3000, SMB: 1398, Startup: 2210 },
    { name: 'Week 3', Enterprise: 2000, SMB: 9800, Startup: 2290 },
    { name: 'Week 4', Enterprise: 2780, SMB: 3908, Startup: 2000 },
]

const topClientsData = [
    { name: 'Acme Corp', revenue: '$50,000', users: 500 },
    { name: 'GlobalTech', revenue: '$45,000', users: 450 },
    { name: 'InnoSystems', revenue: '$40,000', users: 400 },
    { name: 'FutureSoft', revenue: '$35,000', users: 350 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']


export function DashboardPage() {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2023, 0, 20),
        to: addDays(new Date(2023, 0, 20), 20),
    })

    return (


        <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[240px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="end">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>User Registrations</CardTitle>
                            <CardDescription>Monthly user sign-ups</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={userRegistrationData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="users" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Client Distribution</CardTitle>
                            <CardDescription>Breakdown of client types</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={clientDistributionData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {clientDistributionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Daily Active Users</CardTitle>
                            <CardDescription>User activity over the past week</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={dailyActiveUsersData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="users" stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Client Engagement</CardTitle>
                            <CardDescription>Weekly engagement by client type</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={clientEngagementData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="Enterprise" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                    <Area type="monotone" dataKey="SMB" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                    <Area type="monotone" dataKey="Startup" stackId="1" stroke="#ffc658" fill="#ffc658" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Top Clients</CardTitle>
                            <CardDescription>Highest performing clients by revenue and user count</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="px-4 py-2 text-left">Client Name</th>
                                            <th className="px-4 py-2 text-left">Revenue</th>
                                            <th className="px-4 py-2 text-left">Users</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topClientsData.map((client, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="px-4 py-2">{client.name}</td>
                                                <td className="px-4 py-2">{client.revenue}</td>
                                                <td className="px-4 py-2">{client.users}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>

    )
}