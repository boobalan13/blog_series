"use client"
import React from 'react'
// import logo from "@/public/user_logo.webp"
// import Image from 'next/image'
import { useRouter } from 'next/navigation'

const UserNavbar = () => {
    const router=useRouter()
  return (
    <div className='navbar'>
        {/* <Image className='img' src={logo} alt="user" /> */}
        <h1>User</h1>
        <div className='links'>
            <h3 onClick={()=>{router.push("/home")}}>Home</h3>
            <h3 onClick={()=>{router.push("/about")}}>About</h3>
            <h3 onClick={()=>{router.push("/")}}>AdminLogin</h3>
        </div>
    </div>
  )
}

export default UserNavbar