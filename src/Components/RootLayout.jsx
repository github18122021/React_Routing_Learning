import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <React.Fragment>
        <header>
            <nav>
                <NavLink to='/Home'>Home</NavLink>
                <NavLink to='/Products'>Products</NavLink>
                <NavLink to='/About'>About</NavLink>
            </nav>
        </header>
        <main>
          <Outlet/>
        </main>
    </React.Fragment>
  )
}

export default RootLayout