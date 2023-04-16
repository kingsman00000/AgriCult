import React from "react";

function Census() {
  return (
    <div>
      <div class="flex justify-center h-16 bg-black">
        <h1 class="font-mono font-bold text-3xl text-gray-300 mt-3">
          AGRICULTURE CENSUS
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
              <td class="px-6 py-4">
                Operational Guidelines of the 11th Agriculture Census 2021-22
              </td>
              <td class="px-6 py-4">21-07-2022</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/sites/default/files/Operational_Guideline2021_22.pdf"
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
              <td class="px-6 py-4">
                Operational Guidelines of Agriculture Census Scheme (Effective
                Since 04.04.2014)
              </td>
              <td class="px-6 py-4">04-04-2014</td>
              <td class="px-6 py-4">
                <a
                  href="https://agricoop.nic.in/Documents/agricencess21112014.pdf"
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

export default Census;
