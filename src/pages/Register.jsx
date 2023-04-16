import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col space-y-10">
      <a href="/login/seller">
        <button className="btn-reg flex justify-center items-center rounded-full border-2 border-black bg-slate-400 w-80 h-12">
          <div className="text-xl">Sign In as Seller</div>
        </button>
      </a>
      <a href="/login/buyer">
        {" "}
        <button className="btn-reg flex justify-center items-center rounded-full border-2 border-black bg-slate-400 w-80 h-12">
          <div className="text-xl">Sign In as Buyer</div>
        </button>
      </a>
    </div>
  );
};

export default Register;
