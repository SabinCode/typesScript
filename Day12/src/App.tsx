
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/Home/Home'
import UsersPage from './components/Users/Users'
import EventsPage from './components/Events/Events'
import Layout from './components/Layout/Layout'
import ProfilePage from './components/Profile/Profile'

function App() {


  return (
    <>

      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />} >

            <Route path="/Home" element={<HomePage />} />
            <Route path="/Users" element={<UsersPage />} />
            <Route path="/Users/:username" element={<ProfilePage />} />
            <Route path="/Events" element={<EventsPage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
