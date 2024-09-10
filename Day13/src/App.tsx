// import { useState } from 'react'
// import './App.css'


import { Provider, useDispatch } from "react-redux"
import store from "./store/store"
import AddTodo from "./components/AddTodo/AddTodo"
import Todos from "./components/Todos/Todos"


// type Todo = {
//   id: string;
//   text: string;
// }

// //Generic type  level argument
// type User<IdType> = {
//   // id: string | number // union type. yo  garda id type string or number hune vayo. so for e.g filter garda id type number dida , string type vako id filter nahune vayo
//   id : IdType //ID lai IdType rakhepaxi user ko id type hamilai chahe anusar either string or number matra set garna milyo jasle  type Specific huna payo
//   name: string
//   email: string
//   address: string
// }

// //string d
// const user: User<string> = {
//   id: "1",
//   name: "sabin",
//   email: "sabin@sabin",
//   address: "sabin"
// }

// //number id
// const user2: User<number> = {
//   id: 1,
//   name: "sabin",
//   email: "sabin@sabin",
//   address: "sabin"
// }

// const address = {
//   city: "zurich",
//   country: "switzerland"
// }

// type AddressType = typeof address


// function App() {
//   const [input, setInput] = useState("")
//   const [todos, setTodos] = useState<Todo[]>([])

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     // const TodoToset = [...todos, { id: Math.random().toString(), text: input }];
//     // setTodos(TodoToset)
//     // console.log(TodoToset) //console.log  setTodos garda   value aaudaina verkhar set gareko time lagna sak6. so instead we can log  TodoToset 
//     setTodos([...todos, { id: Math.random().toString(), text: input }]) //todos khali array ho, So, ... spread garera setTodos Array ma rakhem 
//     setInput("") //input lai empty gareko Add Todo btn lai click garepaxi. (todo vane set hun6)
//   }

//   function handleDelete(id: string) {
//     const fileteredTodos = todos.filter((item) => item.id !== id) //todos lai filter garera jun id  argument ma pathako id sanga  match navako lai set garcha. tyo nai delete ho
//     setTodos(fileteredTodos)
//     return "asdas"
//   }


//   type fnkotype = ReturnType<typeof handleDelete>

//   return (
//     <>
//       <h1>Day13 Todo APP React-Redux with useState</h1>

//       <form onSubmit={handleSubmit}>
//         <input type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />

//         <button type='submit'>Add Todo</button>

//         {/* todos lai render garna map garem */}

//         {todos.map((item) => {
//           return (
//             <div key={item.id}>
//               <p>{item.text}</p>
//               <button onClick={() => handleDelete(item.id)}>Delete</button></div>)
//         })}
//       </form>

//     </>
//   )
// }

// export default App



function App() {

  return (
    <Provider store={store}>
    <>
      <h1> React-Redux-toolkit</h1>
      <AddTodo />
      <Todos />

    </>
    </Provider>
  )
}

export default App
