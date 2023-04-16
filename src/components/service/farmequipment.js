import React from "react";
import logo from "../../image/logo.png";
const Equipment = () => {
  return (
    <>
      <div className="flex flex-row">
        {/* right-side */}
        <div className="m-12 w-1/2">
          <img className="w-24" src={logo} />
          <h1 className="text-green-950 p-2 font-bold text-2xl ">
            Farm Equipment
          </h1>
          <p className="w-1/2 ">
            Shopping for used farm equipment is easy at AgriCult.com. Simply
            choose a category to begin your search or refine your search
            criteria in the fields below, including by price, location, year or
            model. Can't find the used farm equipment you're looking for?
            Contact us and we'll be happy to locate it for you.
          </p>

          <div className="m-12">
            <h1 className="text-green-700 font-bold text-2xl underline">
              Used Equipment Search
            </h1>
            <input
              name="keyID"
              title="Enter Keyword or Listing ID"
              placeholder="Keyword or Listing ID"
              className="m-4 login__input rounded-lg w-1/2 input input--lg border border-gray-600 block col-span-6"
              type="text"
            />

            <select
              name="SearchBoxCategories"
              id="ddlCategories"
              title="Select Category"
              className="border m-4 border-gray-600 rounded-lg w-1/2"
            >
              <option value={0}>All Categories</option>
              <option value={69}>Attachments</option>
              <option value={72}>Chemical / Fertilizer Applicators</option>
              <option value={70}>
                Construction &amp; Industrial Equipment
              </option>
              <option value={140}>Forestry And Woodlot</option>
              <option value={68}>Grain Handling / Storage</option>
              <option value={74}>Harvesting Equipment</option>
              <option value={75}>Hay And Forage</option>
              <option value={139}>Lawn And Garden</option>
              <option value={73}>Livestock Equipment</option>
              <option value={76}>Other Equipment</option>
              <option value={106}>Parts And Salvage</option>
              <option value={78}>Planting And Seeding</option>
              <option value={149}>Recreational Vehicles</option>
              <option value={71}>Skid Steer Loaders</option>
              <option value={79}>Tillage</option>
              <option value={80}>Tractors</option>
              <option value={77}>Trailers</option>
              <option value={81}>Trucks And Automobiles</option>
            </select>

            <select
              name="state"
              id="state"
              className="rounded-lg m-4 input w-1/2 input--lg border border-gray-600 block col-span-6"
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
            <button className="text-center m-4 h-14 text-white font-bold rounded-lg w-1/2 bg-green-800">
              Search
            </button>
          </div>
        </div>

        {/* left-side */}
        <div className="m-4">
          <div className="content-box" style={{ paddingBottom: "0" }}>
            <div className="content-box-title-bar">
              <h1 className="text-green-700 text-2xl underline font-bold">
                Showcase Listings
              </h1>
            </div>

            <div className="jcarousel flex flex-row">
              <div className="m-12">
                <ul>
                  <li>
                    <div className="featured-item">
                      <a
                        href="/used-farm-equipment/tractors/2015-kubota-m6060-tractor-398711.aspx"
                        title="2015 Kubota M6060 Tractor"
                        className="img-link"
                      >
                        <img
                          src="https://images1.farms.com/ufe-images/files/dealers/bryans-farm-industrial-supply-ltd/listingimages/398711-1-thb.jpg"
                          alt="2015 Kubota M6060 Tractor"
                        />
                      </a>
                      <div style={{ float: "left", width: "68%" }}>
                        {" "}
                        <a
                          href="/used-farm-equipment/tractors/2015-kubota-m6060-tractor-398711.aspx"
                          title="2015 Kubota M6060 Tractor"
                        >
                          2015 Kubota M6060 Tractor
                        </a>
                        <br />
                        <span class="small-font">
                          Rs:700/hr
                          <br />
                          Lucknow ,Malihabad
                        </span>
                      </div>
                      <div className="clearme"></div>
                    </div>

                    <div className="featured-item">
                      <a
                        href="/used-farm-equipment/tillage-equipment/landoll-7450-39-vertical-tillage-393521.aspx"
                        title="Landoll 7450-39 Vertical Tillage"
                        className="img-link"
                      >
                        <img
                          src="https://images1.farms.com/ufe-images/files/dealers/roberts-farm-mt-forest/listingimages/393521-1-thb.jpg"
                          alt="Landoll 7450-39 Vertical Tillage"
                        />
                      </a>
                      <div style={{ float: "left", width: "68%" }}>
                        {" "}
                        <a
                          href="/used-farm-equipment/tillage-equipment/landoll-7450-39-vertical-tillage-393521.aspx"
                          title="Landoll 7450-39 Vertical Tillage"
                        >
                          Combine
                        </a>
                        <br />
                        <span className="small-font">
                          Rs:900/hr
                          <br />
                          Bahraich ,UP
                        </span>
                      </div>
                      <div className="clearme"></div>
                    </div>

                    <div className="featured-item">
                      <a
                        href="/used-farm-equipment/tractors/2016-kubota-m7-171-tractor-384559.aspx"
                        title="2016 Kubota M7-171 Tractor"
                        className="img-link"
                      >
                        <img
                          src="https://images1.farms.com/ufe-images/files/dealers/bryans-farm-industrial-supply-ltd/listingimages/384559-1-thb.jpg"
                          alt="2016 Kubota M7-171 Tractor"
                        />
                      </a>
                      <div style={{ float: "left", width: "68%" }}>
                        {" "}
                        <a
                          href="/used-farm-equipment/tractors/2016-kubota-m7-171-tractor-384559.aspx"
                          title="2016 Kubota M7-171 Tractor"
                        >
                          2016 Kubota M7-171 Tractor
                        </a>
                        <br />
                        <span class="small-font">
                          Rs:900/hr
                          <br />
                          Patna ,Bihar
                        </span>
                      </div>
                      <div className="clearme"></div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="m-12">
                <ul>
                  <li>
                    <div className="featured-item">
                      <a
                        href="/used-farm-equipment/lawn-and-garden-equipment/2023-schulte-sdx-117-snow-removal-271435.aspx"
                        title="2023 Schulte SDX-117 Snow Removal"
                        className="img-link"
                      >
                        <img
                          src="https://images1.farms.com/ufe-images/files/dealers/45591/listingimages/271435-1-thb.jpg"
                          alt="2023 Schulte SDX-117 Snow Removal"
                        />
                      </a>
                      <div style={{ float: "left", width: "68%" }}>
                        {" "}
                        <a
                          href="/used-farm-equipment/lawn-and-garden-equipment/2023-schulte-sdx-117-snow-removal-271435.aspx"
                          title="2023 Schulte SDX-117 Snow Removal"
                        >
                          2023 Schulte SDX-117 Snow Removal
                        </a>
                        <br />
                        <span class="small-font">
                          Rs:500/hr
                          <br />
                          Mumbai
                        </span>
                      </div>
                      <div className="clearme"></div>
                    </div>

                    <div className="featured-item">
                      <a
                        href="/used-farm-equipment/attachments/3pth-quick-attach-19819.aspx"
                        title="3pth Quick Attach"
                        class="img-link"
                      >
                        <img
                          src="https://images1.farms.com/ufe-images/files/dealers/stoneage-equipment/listingimages/19819-1-thb.jpg"
                          alt="3pth Quick Attach"
                        />
                      </a>
                      <div style={{ float: "left", width: "68%" }}>
                        {" "}
                        <a
                          href="/used-farm-equipment/attachments/3pth-quick-attach-19819.aspx"
                          title="3pth Quick Attach"
                        >
                          3pth Quick Attach
                        </a>
                        <br />
                        <span class="small-font">
                          Rs:375/hr
                          <br />
                          Gujarat
                        </span>
                      </div>
                      <div className="clearme"></div>
                    </div>

                    <div className="featured-item">
                      <a
                        href="/used-farm-equipment/tractors/2013-case-ih-magnum-290-391246.aspx"
                        title="2013 Case IH Magnum 290"
                        className="img-link"
                      >
                        <img
                          src="https://images1.farms.com/ufe-images/files/dealers/h-g-violet-equipment/listingimages/391246-1-thb.jpg"
                          alt="2013 Case IH Magnum 290"
                        />
                      </a>
                      <div style={{ float: "left", width: "68%" }}>
                        {" "}
                        <a
                          href="/used-farm-equipment/tractors/2013-case-ih-magnum-290-391246.aspx"
                          title="2013 Case IH Magnum 290"
                        >
                          2013 Case IH Magnum 290
                        </a>
                        <br />
                        <span className="small-font">
                          Rs:849.43/hr
                          <br />
                          Lucknow ,Gomti Nagar
                        </span>
                      </div>
                      <div className="clearme"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <button className=" m-12 w-1/2 rounded-lg bg-green-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipment;
