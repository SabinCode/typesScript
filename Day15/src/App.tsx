
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { DashboardPage } from './components/DashboardPage'
import { ModeToggle } from './components/mode-toggle'
import { Sidebar } from './components/Sidebar'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'
import { UsersPage } from './components/UsersPage'

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Taxing Laughter: The Joke Tax Chronicles
    </h1>
      <Button variant="destructive">Delete</Button>
      <div className="bg-primary text-primary-foreground">Hello</div> */}

        {/* <ModeToggle /> */}

        {/* <DashboardPage /> */}

        {/* <Sidebar /> */}
        {/* <UsersPage /> */}

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Sidebar />}>
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/users' element={<UsersPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  )
}

export default App
