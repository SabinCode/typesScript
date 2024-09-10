import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodos } from "../../features/todo/todoSlice"

function AddTodo () {
    const [input, setInput] = useState("")
    //const [todos, setTodos] = useState<Todo[]>([]) //  yo local  useState chayena aba , store mai 6, global todos State
    const dispatch = useDispatch() //todoSlice ma addTodos ko logic lai dispatch 
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      dispatch(addTodos(input))
    }
    
    return (
      <>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </form>
      </>
    )  
  }
  
  export default AddTodo