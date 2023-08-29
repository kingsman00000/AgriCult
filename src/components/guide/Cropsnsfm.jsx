import React from "react";

function Cropsnsfm() {
  return (
    <div>
      <div class="flex justify-center h-16 bg-black">
        <h1 class="font-mono font-bold text-3xl text-gray-300 mt-3">
          CROPS & NFSM
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
              <td class="px-6 py-4">Updated NFSM Guidelines</td>
              <td class="px-6 py-4">05-08-2018</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/NFSM12102018_0.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
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
              <td class="px-6 py-4">NFSM Operational Guidelines XII Plan</td>
              <td class="px-6 py-4">29-05-2007</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/NFSMXII.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
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
              <td class="px-6 py-4">
                NFSM Guidelines on Commercial Crops XII Plan
              </td>
              <td class="px-6 py-4">05-03-2013</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/CommerialCrops.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
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
              <td class="px-6 py-4">
                Inclusion of two more districts of Punjab under NFSM
              </td>
              <td class="px-6 py-4">02-07-2014</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/InclusionOfTwoMoreDistricts%28Punjab%29.pdf"
                  class="text-blue-700 underline"
                >
                  Download pdf
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cropsnsfm;
