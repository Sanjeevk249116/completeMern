import React, { createContext, useState } from 'react'

export const AuthContainVal=createContext();
function AuthContainer({children}) {
  const [show, setShow] = useState(false);
  return (
    <AuthContainVal.Provider value={{show, setShow}}>
   {children}
    </AuthContainVal.Provider>
  )
}

export default AuthContainer
