

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { changeTheme } from './features/theme/themeSlice'
import { RootState } from './store/store'
import { increaseCount } from './features/cart/cartSlice'
import { useGetPokemonByNameQuery } from './RtkQuery/pokemon/pokemon'

function App() {
  const dispatch = useDispatch() //dispatching action, to change theme

  const { data, error, isLoading, } = useGetPokemonByNameQuery("pikachu");

  const theme = useSelector((state: RootState) => state.theme.name) //useSelector  hernalai renderingkolagi
  const numberOfItems = useSelector((state: RootState) => state.cart.numberOfItems)
  //useDispatch writiing and update ko lagi
  function handleThemeChange() { //toggleChange theme, dark to light or light to dark
    if (theme === 'dark') {
      dispatch(changeTheme('light'))
    } else {
      dispatch(changeTheme('dark'))
    }
  }

  console.log({ theme }) //change theme garda console ma dark aaunaparyo
  console.log({ data })

  function handleItemCount() {
    dispatch(increaseCount(1))
    // dispatch(increaseCount()) //this works without action.payload
  }




  return (
    <>
      <div className={`theme-${theme}`}>
        <h1> Day 14 react-redux-tollkit - {numberOfItems}</h1>
        <button onClick={handleItemCount}>increaseCount Item +</button>

        <button onClick={handleThemeChange}>Change Theme</button>

        {/* {isLoading && <h1>Loading</h1>} */}

        {/* data is an object and abilities is an array. so, data?.abilities.map */}
        {/* data naaaunjel loading spiner aau6 */}
       {isLoading ? (
        <p>Loading</p> ) : (
        data?.abilities.map((item) => {
          return <p key={item.ability.name}>{item.ability.name}</p>
        })
      )}
      </div>
    </>
  )
}

export default App
