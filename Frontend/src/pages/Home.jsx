import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full flex justify-between flex-col pt-8 bg-center bg-cover bg-[url(https://freight.cargo.site/w/2458/q/75/i/d8287b5c6f3a23bb657e1aefe305f26fae3ea105ba01d8bff96efe605eaac3a8/U4B.jpg)]">
        <img className="w-24 ml-5" src="/images/logo.png" alt="" srcset="" />
        <div className="bg-white w-full pb-9 px-5 py-8">
          <h2 className="text-2xl font-bold">Get Started With Uber</h2>
          <Link to='/login' className="flex justify-center items-center rounded py-3 w-full bg-black text-white font-bold mt-5 text-xl">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
