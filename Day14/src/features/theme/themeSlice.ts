import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type TTheme = 'light' | 'dark'


const initialState: { name: TTheme} = {
        name: 'light',
    }


const themeSlice = createSlice({
    name: 'theme',  
    initialState,   
reducers: {
    changeTheme: (state, action: PayloadAction<TTheme>) => {
        state.name = action.payload
    }
},
})
export const { changeTheme } = themeSlice.actions
export default themeSlice
