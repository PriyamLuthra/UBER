import React, { useState } from "react";
import { Link } from "react-router-dom";

const Userlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData , setUserData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
    setEmail('');
    setPassword('')
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="bg-black w-full">
        <img
          className="w-24 ml-2"
          src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1200x675.v1623372852.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div className="p-7">
        <form onSubmit={submitHandler} action="" className="p-2">
          <h3 className="mb-2 font-apple text-lg font-semibold ">
            What's Your Email?
          </h3>
          <input
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="text"
            placeholder="email@email.com"
            className="text-xl rounded w-full border bg-[#eeee] p-3 mb-6 placeholder:text-lg outline-none"
          />
          <h3 className="mb-2 font-apple text-lg font-semibold">
            Enter Password
          </h3>
          <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="text"
            className="text-xl rounded w-full border bg-[#eeee] p-3 mb-8 placeholder:text-base outline-none"
          />
          <button className="w-full bg-black flex justify-center items-center text-white p-3 rounded font-apple font-semibold mb-3">
            Login
          </button>
          <p className="text-center font-apple ">
            New Here?
            <Link to="/signup" className="text-blue-600">
              {" "}
              Create a new Account{" "}
            </Link>
          </p>
        </form>
      </div>
      <div className="p-7">
        <Link to='/captain-login' className="flex items-center justify-center w-full bg-black text-white rounded p-3 mb-5 font-apple font-semibold">Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default Userlogin;
