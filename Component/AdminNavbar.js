"use client"
import React from 'react'
// import logo from "@/public/admin_logo.jpg"
// import Image from 'next/image'
import { useRouter } from 'next/navigation'

const AdminNavbar = () => {
    const router=useRouter();
  return (
    <div className='navbar'>
        {/* <Image className='img' src={logo} alt="admin" /> */}
        <h1>Admin</h1>
        <div className='links'>
           
            <h3 onClick={()=>{router.push("/create")}}>Create Blog</h3>
            <h3 onClick={()=>{router.push("/update")}}>Update Blog</h3>
            <h3 onClick={()=>{router.push("/adminhome")}}>Home</h3>

        </div>
    </div>
  )
}

export default AdminNavbar