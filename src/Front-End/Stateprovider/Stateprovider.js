import {createContext, useContext,useReducer} from 'react'
//prepares the data layer
export const stateContext=createContext()
//wrap our app and provide the data layer
function Stateprovider({reducer,intialState,children}) {
  return (
    <stateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </stateContext.Provider>
  )
}

export default Stateprovider
//pull and push information from the daata layer
export const useStateValue=()=>useContext(stateContext)