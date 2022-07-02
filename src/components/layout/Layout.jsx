import React from 'react'
import MainNavigation from "../layout/MainNavigation";
export const Layout = (props) => {
  return (
    <div>
        <MainNavigation />
    <main className='container'>
        {props.children}
    </main>
    </div>
  )
}
