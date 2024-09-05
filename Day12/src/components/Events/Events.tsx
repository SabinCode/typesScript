import { useNavigate } from "react-router-dom"



function EventsPage() {
    const navigate = useNavigate()
    function handleGoToUsers() {
        navigate({ pathname: "/Users", search: "?id=10&from=EventsPage" }) //search Queryparams ho. yo Users vanne page ma url ma aau6 ,yeslai hamile users page ma gayera component ma lina sakin6
        // yo useSearchParams bata returns an object containing the query parameters from the current URL
    }
    return (
        <>
            This is EventsPage

            <button onClick={handleGoToUsers}>Go to Users</button>
        </>
    )
}

export default EventsPage