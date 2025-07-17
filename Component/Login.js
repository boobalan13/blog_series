"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  const redirect = (e) => {
    e.preventDefault();
    router.push("/adminhome");
  };
  return (
    <div className="login_area">
      <div className="login_box">
        <h2>Login</h2>
        <form className="login_form" action="">
          <input type="text" placeholder=" Username" />
          <input type="password" placeholder=" Password" />
          <button onClick={redirect}>Login</button>
        </form>
        <p>
          Create an new Account{" "}
          <span
            className="redic"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Sign up
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
