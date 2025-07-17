"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Signup = () => {
  const router = useRouter();
  const handlesignup=(e)=>{
    e.preventDefault();
    router.push("/adminhome");
  }
  return (
    <div className="login_area">
      <div className="signup_box">
        <h2>Sign Up</h2>
        <form className="signup_form" action="">
          <input type="text" placeholder=" Username" />
          <input type="email" placeholder=" Email" />
          <input type="password" placeholder=" Password" />
          <input type="password" placeholder=" Confirm Password" />
          <button
            onClick={handlesignup}
          >
            Sign Up
          </button>
        </form>
        <p>
          Already Have An Account{" "}
          <span
            className="redic"
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
