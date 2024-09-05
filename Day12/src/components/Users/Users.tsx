import { useNavigate, useSearchParams } from "react-router-dom"



function UsersPage() {
    const navigate = useNavigate() //useNavigate returns a function that lets you navigate programmatically

    //control hold or cmd hold n click garda yo useSearchParams ko details herna sakin6
    const [searchParams, setSeatchParams] = useSearchParams()
    console.log(searchParams.get("id"), "Search Params ko id") // search params ko id 10 aau6
    function handleGoToEvents() {
        // navigate("/Events") //shortcut, eventspage ma pug6
        navigate({ pathname: "/Events" })
    }
    return (
        <>
            This is UsersPage with id - {searchParams.get("id")} from {searchParams.get("from")}
            {/* url ma vako id and from component ma payo */}

            <button onClick={() => setSeatchParams({ id: "20" })}>change Search param</button>

            <button onClick={handleGoToEvents}>Go to Events</button>
        </>
    )
}

export default UsersPage