import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
const GuideDiv = ({ datta, linkIt }) => {
  return (
    <div className="w-96 h-28 rounded-3xl border-black border-2 m-8 bg-slate-300 flex justify-center items-center flex-col">
      <div>
        <AiFillFilePdf />
      </div>
      <div>{datta}</div>
      <a href={linkIt}>
        <div className="underline text-blue-600 hover:text-green-500">
          {" "}
          Click here
        </div>
      </a>
    </div>
  );
};

export default GuideDiv;
