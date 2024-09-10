import { useSelector } from "react-redux"


//hernalai useSelector reading , change garnalai useDispatch writing update
//todos useState ma xoina . Global store ma cha, teslai render garna lako
function Todos () {
    const todos  = useSelector((state) => state.todos)
    return (
        <div>
            {/* <h1> store ma vako Todos render gardai</h1>  */}

            {todos.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>{item.text}</h1>
                        </div>)
            })}
        </div>
    )
}   

export default Todos