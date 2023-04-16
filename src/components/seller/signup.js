import React from "react";
import image1 from "../../image/image1.png";
const SignUp = () => {
  return (
    <>
      <div className="flex flex-row">
        {/* right-side */}
        <div className="w-3/4 bg-black">
          <div className="flex flex-row">
            <button className="bg-orange-500 text-white rounded-2xl m-12 w-32">
              Home
            </button>
            <button className="bg-orange-500 text-white rounded-2xl m-12 w-32">
              About
            </button>
            <button className="bg-orange-500 text-white rounded-2xl m-12 w-32">
              SignIn
            </button>
          </div>
          <img className="rounded-xl" src={image1} alt="" />
        </div>

        {/* left-side */}
        <div className="bg-green-100 w-2/3">
          <div className="h-screen xl:h-auto flex xl:py-0 my-10 xl:my-0">
            <div className="my-auto mx-auto bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full">
              <h2 className="intro-x font-bold text-2xl xl:text-2xl text-center xl:text-center">
                AgriCult Seller Registration
              </h2>
              <form method="post" id="Registrationform">
                <div className="sm:grid grid-cols-1">
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label style={{ display: "block", fontWeight: "bolder" }}>
                        Personal Informations
                      </label>
                    </div>
                  </div>
                </div>
                <div className="sm:grid grid-cols-1">
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="intro-x input w-full input--lg border rounded-lg border-gray-300 block col-span-6"
                        placeholder="Name"
                      />
                    </div>
                    <p className="error first_name"></p>
                  </div>
                  <div className="relative">
                    <div className="p-2">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="Last Name"
                      />
                    </div>
                    <p className="error last_name"></p>
                  </div>
                </div>
                <div className="sm:grid grid-cols-2">
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="Email"
                      />
                    </div>
                    <p className="error email"></p>
                  </div>
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>Primary phone</label>
                      <input
                        type="text"
                        name="phonenumber"
                        maxlength="10"
                        id="phonenumber"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="Phone number"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                      />
                    </div>
                    <p className="error phonenumber"></p>
                  </div>
                </div>
                <div className="sm:grid grid-cols-2">
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>PAN Card no</label>
                      <input
                        type="text"
                        name="pancard_no"
                        maxlength="10"
                        id="pancard_no"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="Pan card no"
                      />
                    </div>
                    <p className="error pancard_no"></p>
                  </div>

                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>Seller type</label>
                      <select
                        name="seller_type"
                        id="seller_type"
                        className="intro-x input w-full input--lg border border-gray-300 block col-span-6"
                      >
                        <option value=""> --- Select Seller Type --- </option>
                        <option value="farmer">Farmer</option>
                        <option value="landmark">Landmark</option>
                        <option value="brokers">Brokers </option>
                        <option value="exporter">Exporter </option>
                      </select>
                    </div>
                    <p className="error seller_type"></p>
                  </div>
                </div>
                <div id="landmark_section">
                  <div className="sm:grid grid-cols-2">
                    <div className="relative mt-2">
                      <div className="p-2">
                        <label>Shop Name</label>
                        <input
                          type="text"
                          name="shopname"
                          id="shopname"
                          className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                          placeholder="Enter Shop Name"
                        />
                      </div>
                      <p className="error shopname"></p>
                    </div>
                    <div className="relative mt-2">
                      <div className="p-2">
                        <label>Landmark</label>
                        <input
                          type="text"
                          name="landmark"
                          id="landmark"
                          className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                          placeholder="Nearby Landmark*(Famous Place/Building Name/Street Name/etc..)"
                        />
                      </div>
                      <p className="error landmark"></p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <p>
                    Are you willing to delivery you goods as a free delivery
                  </p>
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex items-center text-gray-700 mr-2">
                      <input
                        type="radio"
                        className="input border mr-2 rounded-lg"
                        id="yes"
                        name="free_delivery"
                        value="yes"
                      />
                      <label
                        style={{ display: " block" }}
                        className="cursor-pointer select-none"
                        for="yes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center text-gray-700 mr-2 mt-2 sm:mt-0">
                      <input
                        type="radio"
                        className="input border mr-2 rounded-lg"
                        id="no"
                        name="free_delivery"
                        value="no"
                        checked
                      />
                      <label
                        style={{ display: "block" }}
                        className="cursor-pointer select-none"
                        for="no"
                      >
                        No
                      </label>
                    </div>
                  </div>
                  <p className="error free_delivery"></p>
                </div>
                <div
                  className="sm:grid grid-cols-1"
                  id="ldc_disply"
                  style={{ display: "none" }}
                >
                  <div className="relative mt-2">
                    <div className="p-2">
                      <input
                        type="text"
                        name="landmark_delivery_cost"
                        id="landmark_delivery_cost"
                        className="intro-x input w-full input--lg border rounded-lg border-gray-300 block col-span-6"
                        placeholder="Flat Delivery Rate ( 0 - 100 Rs.)"
                      />
                    </div>
                    <p className="error landmark_delivery_cost"></p>
                  </div>
                </div>

                <div
                  className="sm:grid grid-cols-1"
                  id="kilodisply"
                  style={{ display: "none" }}
                >
                  <div className="relative mt-2">
                    <div className="p-2">
                      <input
                        type="text"
                        name="kilometer"
                        id="kilometer"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="within kilometer"
                      />
                    </div>
                    <p className="error kilometer"></p>
                  </div>
                </div>

                <div className="sm:grid grid-cols-1">
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label style={{ display: "block", fontWeight: "bolder" }}>
                        Communication Address
                      </label>
                    </div>
                  </div>
                </div>
                <div className="sm:grid grid-cols-2">
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="Address eg ( Door no)"
                      />
                    </div>
                    <p className="error address"></p>
                  </div>
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>Building Name</label>
                      <input
                        type="text"
                        name="building_name"
                        id="building_name"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="Building name"
                      />
                    </div>
                    <p className="error building_name"></p>
                  </div>
                </div>
                <div className="sm:grid grid-cols-2">
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>Street Name</label>
                      <input
                        type="text"
                        name="street_name"
                        id="street_name"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="Street name"
                      />
                    </div>
                    <p className="error street_name"></p>
                  </div>
                  <div className="relative mt-2" hidden>
                    <div className="p-2">
                      <label>Landmark</label>
                      <input
                        type="text"
                        name="landmark"
                        id="landmark"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="Landmark"
                      />
                    </div>
                    <p className="error landmark"></p>
                  </div>

                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>Country</label>
                      <input
                        name="country"
                        id="country"
                        readonly="true"
                        type="text"
                        value="India"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="Country"
                      />
                    </div>
                    <p className="error country"></p>
                  </div>
                </div>
                <div className="sm:grid grid-cols-2">
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>State</label>

                      <select
                        name="state"
                        id="state"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="District"
                      >
                        <option value=""> --- Select State --- </option>
                        <option value={35}>ANDAMAN & NICOBAR ISLANDS</option>
                        <option value={28}>ANDHRA PRADESH</option>
                        <option value={12}>ARUNACHAL PRADESH</option>
                        <option value={18}>ASSAM</option>
                        <option value={10}>BIHAR</option>
                        <option value={4}>CHANDIGARH</option>
                        <option value={2}>CHHATTISGARH</option>
                        <option value={26}>DADRA & NAGAR HAVELI</option>
                        <option value={25}>DAMAN & DIU</option>
                        <option value={7}>DELHI</option>
                        <option value={30}>GOA</option>
                        <option value={24}>GUJARAT</option>
                        <option value={6}>HARYANA</option>
                        <option value={2}>HIMACHAL PRADESH</option>
                        <option value={1}>JAMMU & KASHMIR</option>
                        <option value={20}>JHARKHAND</option>
                        <option value={29}>KARNATAKA</option>
                        <option value={32}>KERALA</option>
                        <option value={31}>LAKSHADWEEP</option>
                        <option value={23}>MADHYA PRADESH</option>
                        <option value={27}>MAHARASHTRA</option>
                        <option value={14}>MANIPUR</option>
                      </select>
                    </div>
                    <p className="error state"></p>
                  </div>
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>District</label>
                      <input
                        type="text"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="District"
                      />
                    </div>
                    <p className="error district"></p>
                  </div>
                </div>
                <div className="sm:grid grid-cols-1">
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label
                        style={{ display: " block", fontWeight: "bolder" }}
                      >
                        Bank Details
                      </label>
                    </div>
                  </div>
                </div>
                <div className="sm:grid grid-cols-2">
                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>District</label>
                      <input
                        name="account_no"
                        id="account_no"
                        type="text"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="Account number"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                      />
                    </div>
                    <p className="error account_no"></p>
                  </div>

                  <div className="relative mt-2">
                    <div className="p-2">
                      <label>Country</label>
                      <input
                        name="ifsc_code"
                        id="ifsc_code"
                        type="text"
                        className="intro-x rounded-lg input w-full input--lg border border-gray-300 block col-span-6"
                        placeholder="IFSC code"
                      />
                    </div>
                    <p className="error ifsc_code"></p>
                  </div>
                </div>
                <div className="sm:grid grid-cols-1">
                  <div className="relative mt-2">
                    <div className="intro-x p-2">
                      <input
                        type="checkbox"
                        className="input rounded-lg mr-2"
                        id="termsandcond"
                        style={{ border: "1px solid" }}
                      />
                      <span
                        className="cursor-pointer select-none"
                        for="termsandcond"
                      >
                        Check here to indicate that you have read and agree to
                        the
                        <a className="text-theme-1" target="_blank">
                          Terms & Conditions
                        </a>{" "}
                        of the AgriCult{" "}
                      </span>
                    </div>
                    <p className="error termsandcond"></p>
                  </div>
                </div>

                <div className="mt-3 xl:mt-2 text-center xl:text-left">
                  <button className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0 bg-green-600 rounded-lg">
                    Sign up
                  </button>
                  <a className="text-theme-1">
                    {" "}
                    Already have an account? Sign in
                  </a>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
