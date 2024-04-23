"use client"
import React, { useEffect, useRef, useState } from "react"

import { fetchData } from "@/utils"

interface IUserContext {
    

}

interface IUserProvider {
  children: React.ReactNode
}

const Context = React.createContext<IUserContext>({} as IUserContext)

const UserProvider = ({ children }: IUserProvider) => {


  return (
    <Context.Provider
      value={{
   
      }}
    >
      {children}
    </Context.Provider>
  )
}

const useUserContext = () => {
  const c = React.useContext(Context)

  if (c === undefined) {
    throw new Error("useUserContext must be used within a UserProvider")
  }

  return c
}

export { UserProvider, useUserContext }