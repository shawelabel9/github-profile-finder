import React,{createContext,useReducer} from 'react'
import {reducer} from './reducer'
export const GithubContext = createContext(null)

const GithubProvider = ({children}) => {
    const initialState= {
        users: [],
        user:{},
        loading: false,
        repos:[]
    }
    const [state,dispatch] = useReducer(reducer, initialState)
  return (
    <GithubContext.Provider value={{state, dispatch}}>
        {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider