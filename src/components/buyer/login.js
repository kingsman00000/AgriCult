import React from "react";
import image1 from "../../image/image1.png";
const LogInB = () => {
  return (
    <>
      <div className="flex flex-row bg-green-100">
        {/* right-side */}
        <div className="w-1/2 bg-black">
          <div className="flex flex-row">
            <button className="bg-orange-500 text-white rounded-2xl m-12 w-32">
              Home
            </button>
            <button className="bg-orange-500 text-white rounded-2xl m-12 w-32">
              About
            </button>
            <button className="bg-orange-500 text-white rounded-2xl m-12 w-32">
              SignUp
            </button>
          </div>
          <img className="rounded-xl" src={image1} alt="" />
        </div>

        {/* left-side */}
        <div className=" m-48">
          <div className="my-auto mx-auto bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full">
            <h2 className="font-bold text-2xl xl:text-3xl text-center xl:text-left">
              AgriCult Buyer(Farmer) Sign In
            </h2>
            <form method="post" id="Loginform">
              <div className="sm:grid grid-cols-1">
                <div className="relative mt-2">
                  <div className="p-2">
                    <label>Email</label>
                    <input
                      type="text"
                      name="user_id"
                      id="user_id"
                      className="login__input rounded-lg w-1/2 input input--lg border border-gray-300 block col-span-6"
                      placeholder="User Id or Mobile number"
                      required=""
                    />
                  </div>
                  <p className="error user_id"></p>
                </div>

                <div className="relative mt-2">
                  <div class="p-2">
                    <label>Password</label>
                    <input
                      type="Password"
                      name="password"
                      id="password"
                      className="login__input input input--lg border border-gray-300 block col-span-6 w-1/2 rounded-lg"
                      placeholder="Password"
                      required=""
                    />
                  </div>
                  <p className="error password"></p>
                </div>
              </div>
              <div className="flex text-gray-700 text-xs sm:text-sm mt-2 p-2">
                <a href="#">Forgot Password?</a>
              </div>

              <div className="mt-2 xl:mt-2 text-center xl:text-left p-2">
                <button className="button button--lg w-full xl:w-32 text-gray-700 border bg-green-400 rounded-lg border-gray-300 mt-3 xl:mt-0">
                  Sign up
                </button>
                <a
                  href="https://www.kisanbandi.com/kisanbandiseller/Registration/"
                  className="text-theme-1"
                >
                  {" "}
                  Create an new account Sign up ?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LogInB;
