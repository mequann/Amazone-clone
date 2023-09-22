import {createContext, useContext,useReducer,useState} from 'react'

export const stateContext=createContext()
//wrap our app and provide the data layer
function Stateprovider({reducer,initailState,children}) {
  return (
    <stateContext.Provider value={useReducer(reducer,initailState)}>
        {children}
    </stateContext.Provider>
  )
}

export default Stateprovider
//pull and push information from the daata layer
export const useStateValue=()=>useContext(stateContext)