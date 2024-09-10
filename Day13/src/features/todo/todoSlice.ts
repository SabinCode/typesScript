import { createSlice, nanoid } from "@reduxjs/toolkit";
type Todo = {
    id: string
    text: string
}


//initial state is object , jasko todos vanne key ma  Todo ko type rakhem
const initialState: { todos: Todo[] } = {
    todos: []
};

//Reducers = yesko kaam action hune ho
//addTodos function ma state and action vanne argument aaaaau6
//state = current state , up to date state aau6
//action = logic for changing state (text, id, etc)
//nanoid() = unique id generator
//payload = action.payload pathako text yeta aaucha
const todoSlice = createSlice({
    name: "todo", //kun slice kaam vairacha vanera chinnalai matra name
    //initialState: [] //yo garda ni  hun6. clarity ko lagi mathi cons tinitialstate todos []
    initialState, //initial state , use state ma vako initial state jastai ho
    reducers: {
        addTodos: (state, action) => {
            state.todos.push({id: nanoid(), text: action.payload});
        },
    },
});
    
//export reducers , yo slice banako storema rakhna par6
export default todoSlice;
// export default todoSlice.reducer;
//export actions(action ma arko componentharum ma use vako text matra aaune vo)
export const { addTodos } = todoSlice.actions;
