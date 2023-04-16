import React from "react";
import "./Card.css";
const Card = ({ imgUrl, data }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="cardBox transition-all duration-500">
        <div class="w-80 overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={imgUrl}
              alt="image"
              className="w-80 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data}
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
