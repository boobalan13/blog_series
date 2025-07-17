import UserNavbar from '@/Component/Navbar'
import React from 'react'

const Userlayout = ({children}) => {
  return (
    <div>
       <UserNavbar></UserNavbar>
       {children}
    </div>
  )
}

export default Userlayout