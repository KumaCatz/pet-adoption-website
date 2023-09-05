'use client'

import './globals.css'
import React, { useReducer } from 'react'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

import { userDataReducer } from './reducers/userDataReducer.js'
import userDataReducerContext from './contexts/userDataReducerContext.js'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Adoption Center",
  description: "Mr.Bear's Pet Adoption Center",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [userData, dispatchUserData] = useReducer(userDataReducer, [])
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <userDataReducerContext.Provider value={{userData, dispatchUserData}}>
          {children}
        </userDataReducerContext.Provider>
      </body>
    </html>
  )
}
