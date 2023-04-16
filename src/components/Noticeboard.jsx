import React from "react";

function Noticeboard() {
  return (
    <div>
      <div class="flex justify-center h-16 bg-black">
        <h1 class="font-mono font-bold text-3xl text-gray-300">
          MINISTRY MAJOR SCHEMES
        </h1>
      </div>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Sr. no
              </th>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Publish Date
              </th>
              <th scope="col" class="px-6 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td class="px-6 py-4">Agriculture Infrastructure Fund</td>
              <td class="px-6 py-4">13-02-2014</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/FINALSchemeGuidelinesAIF%20(2).pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a
                  href="http://agriinfra.dac.gov.in/"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td class="px-6 py-4">ATMA</td>
              <td class="px-6 py-4">03-10-2018</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/FINALSchemeGuidelinesAIF%20(2).pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a
                  href="https://extensionreforms.dacnet.nic.in/DashBoard_Statusatma.aspx"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                3
              </th>
              <td class="px-6 py-4">AGMARKNET</td>
              <td class="px-6 py-4">14-03-2014</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/Agmarknet_Guidelines.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a
                  href="http://agmarknet.gov.in/PriceAndArrivals/arrivals1.aspx"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                4
              </th>
              <td class="px-6 py-4">Horticulture</td>
              <td class="px-6 py-4">05-04-2014</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/midh_Guidelines.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a
                  href="http://midh.gov.in/nhmapplication/feedback/midhKPI.aspx"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                5
              </th>
              <td class="px-6 py-4">Online Pesticide Registration</td>
              <td class="px-6 py-4">23-09-2009</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/Pesticides_Registration.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a href=""></a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                6
              </th>
              <td class="px-6 py-4">Plant Quarantine Clearance</td>
              <td class="px-6 py-4">05-01-2011</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/Quarantine_Guidelinespdf.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a
                  href="https://pqms.cgg.gov.in/pqms-angular/home"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                7
              </th>
              <td class="px-6 py-4">DBT in Agriculture</td>
              <td class="px-6 py-4">12-05-2014</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/Guideline_DBTinAgriculture.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a
                  href="https://www.dbtdacfw.gov.in/"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                8
              </th>
              <td class="px-6 py-4">Pradhanmantri Krishi Sinchayee Yojana</td>
              <td class="px-6 py-4">06-05-2016</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/Guidelines_PMKSY.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a
                  href="https://pmksy.gov.in/mis/frmDashboard.aspx"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                9
              </th>
              <td class="px-6 py-4">Kisan Call Center</td>
              <td class="px-6 py-4">01-05-2015</td>
              <td class="px-6 py-4">
                <a></a>
                <br />
                <a
                  href="https://mkisan.gov.in/Home/KCCDashboard"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                10
              </th>
              <td class="px-6 py-4">mKisan</td>
              <td class="px-6 py-4">06-05-2015</td>
              <td class="px-6 py-4">
                <a></a>
                <br />
                <a
                  href="https://mkisan.gov.in/"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                11
              </th>
              <td class="px-6 py-4">Jaivik Kheti</td>
              <td class="px-6 py-4">18-05-2015</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/Jaivik_Kheti_Guidelines.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a
                  href="https://pgsindia-ncof.gov.in/home.aspx"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                12
              </th>
              <td class="px-6 py-4">e-Nam</td>
              <td class="px-6 py-4">04-10-2016</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/Enamguidelines.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a href="https://enam.gov.in/" class="text-blue-700 underline">
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                13
              </th>
              <td class="px-6 py-4">Soil Health Card</td>
              <td class="px-6 py-4">01-09-2016</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/Guidelines_Soil%20Health%20Card.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a
                  href="https://soilhealth.dac.gov.in/"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                14
              </th>
              <td class="px-6 py-4">Pradhan Mantri Fasal Bima Yojana</td>
              <td class="px-6 py-4">05-08-2017</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/PMFBY_Guidelines.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
                <br />
                <a
                  href="https://pmfby.gov.in/ext/rpt/ssfr_17"
                  class="text-blue-700 underline"
                >
                  Link
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Noticeboard;
