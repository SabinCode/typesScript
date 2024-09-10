import { combineSlices, configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/theme/themeSlice";
import cartSlice from "../features/cart/cartSlice";
import { pokemonApi } from "../RtkQuery/pokemon/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";


//slice lai store ma, reducer ma rakhna par6
//rtkQuery lai pani store ma rakhna par6. middleware pani rakhne docs bata copy
const rootReducer =  combineSlices(themeSlice, cartSlice, pokemonApi )
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(pokemonApi.middleware),

})

setupListeners(store.dispatch)

export default store
export type RootState = ReturnType<typeof store.getState>