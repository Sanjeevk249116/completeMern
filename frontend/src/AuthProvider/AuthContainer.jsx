import React, { createContext, useState } from 'react'

export const AuthContainVal=createContext();
function AuthContainer({children}) {

  const[products,setProducts]=useState([])
  const[pages,setPages]=useState(0)
  return (
    <AuthContainVal.Provider value={{products,setProducts,pages,setPages}}>
   {children}
    </AuthContainVal.Provider>
  )
}

export default AuthContainer
