import React from "react";

function Bottomgallery({ iurl, line }) {
  return (
    <div>
      <div class="flex ">
        <div class="container relative h-60 w-60 px-4 py-4">
          <img src={iurl} class="cursor-pointer rounded-lg" alt="" />
          <h3 class="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {line}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Bottomgallery;
