import { RootState } from "../../store/store"
import { useSelector } from "react-redux"

type TodoItem = {
    id: string;
    text: string;
  }
//hernalai useSelector reading , change garnalai useDispatch writing update
//todos useState ma xoina . Global store ma cha, teslai render garna lako
function Todos () {
    const todos  = useSelector((state:RootState) => state.todos)
    return (
        <div>
            {/* <h1> store ma vako Todos render gardai</h1>  */}

            {todos.map((item: TodoItem) => {
                return (
                    <div key={item.id}>
                        <h1>{item.text}</h1>
                        </div>)
            })}
        </div>
    )
}   

export default Todos