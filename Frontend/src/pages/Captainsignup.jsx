import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainsignup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});
    const [firstName, setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        fullName:{
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password,
      });
      setEmail("");
      setPassword("");
      setFirstName('');
      setLastName('');
    };
  

  return (
    <div className="h-screen flex flex-col justify-between">
          <div className="bg-black w-full">
            <img
              className="w-24 ml-2"
              src="https://images.sftcdn.net/images/t_app-icon-m/p/41df77d0-e87a-11e6-97e0-74e73673b02e/796684308/uber-driver-logo.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="p-7">
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              action=""
              className="p-2"
            >
              <h3 className="mb-2 font-apple text-lg font-semibold">
                What's our Captain Name?
              </h3>
              <div className="flex gap-2">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="First Name"
                  className=" w-1/2 text-xl rounded border bg-[#eeee] p-3 mb-6 placeholder:text-lg outline-none"
                />
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Last Name"
                  className=" w-1/2 text-xl rounded  border bg-[#eeee] p-3 mb-6 placeholder:text-lg outline-none"
                />
              </div>
    
              <h3 className="mb-2 font-apple text-lg font-semibold ">
                What's our Captain Email?
              </h3>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email@email.com"
                className="text-xl rounded w-full border bg-[#eeee] p-3 mb-6 placeholder:text-lg outline-none"
              />
              <h3 className="mb-2 font-apple text-lg font-semibold">
                Enter Password
              </h3>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="text-xl rounded w-full border bg-[#eeee] p-3 mb-8 placeholder:text-base outline-none"
              />
              <button className="w-full bg-black flex justify-center items-center text-white p-3 rounded font-apple font-semibold mb-3">
                Sign Up
              </button>
              <p className="text-center font-apple ">
                Already have a account?
                <Link to="/captain-login" className="text-blue-600">
                  {" "}
                  Login Here{" "}
                </Link>
              </p>
            </form>
          </div>
          <div className="p-7">
            <p className='text-[12px]'>
              This site is protected by reCAPTCHA and the Google{" "}
              <span className="underline decoration-solid"> Privacy Policy </span>{" "}
              and{" "}
              <span className="underline decoration-solid">
                {" "}
                Terms of Service apply{" "}
              </span>{" "}
            </p>
          </div>
        </div>
  )
}

export default Captainsignup