import { useParams } from "react-router-dom"



function ProfilePage() {
    const { username } = useParams() //useParams returns an object containing the route parameters from the current URL
    return (
        <>
            <h1>This is ProfilePage - {username}</h1>
        </>
    )
}

export default ProfilePage