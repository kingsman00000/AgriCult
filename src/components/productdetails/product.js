import React from "react";
const Product = () => {
  return (
    <>
      <div className="grid h-screen place-items-center bg-green-200">
        <div className="bg-green-100 grid h-screen place-items-center w-1/2 items-center justify-center ">
          <h1 className="text-black text-2xl text-center">Crop Details</h1>
          <form method="post" id="Loginform">
            <div className="sm:grid grid-cols-1">
              <div className="relative mt-2 ">
                <div className="p-2">
                  <label>Crop Name</label>
                  <input
                    type="text"
                    name="user_id"
                    id="user_id"
                    className="login__input rounded-lg w-full input input--lg border border-gray-300 block col-span-6"
                    required=""
                  />
                </div>
              </div>

              <label
                for="message"
                className="block mb-2 p-2  text-sm font-medium text-gray-900 dark:text-black"
              >
                Description
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-200 dark:bg-gray-100"
                placeholder="Write a crop description..."
              ></textarea>
            </div>

            {/* fileupload */}

            <div class="p-10 items-center justify-center w-full">
              <label className="p-12 m-8 ">Upload Crop Images</label>
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-100 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-100 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>

            <div className="relative mt-2">
              <div className="p-2">
                <label>Quantity</label>
                <input
                  type="text"
                  id="quantity"
                  className="intro-x input w-full input--lg border rounded-lg border-gray-300 block col-span-6"
                  placeholder="kgs"
                />
              </div>
              <p className="error first_name"></p>
            </div>
            <div className="mt-2 xl:mt-2 text-center xl:text-left p-2">
              <button className="button button--lg w-full xl:w-32 text-gray-700 border bg-green-400 rounded-lg border-gray-300 mt-3 xl:mt-0">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
