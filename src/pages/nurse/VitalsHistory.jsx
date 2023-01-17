import React from 'react'

function VitalsHistory() {
  return (
    <div className="p-4 m-4 bg-white shadow-lg rounded-lg">
      <h1 className="py-10">Vitals History</h1>
      <div>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row">
            <div className="flex flex-row">
              {/* image data */}
              <div className="w-10 rounded-full mr-3">
                <img
                  src="https://placeimg.com/80/80/people"
                  className="rounded-lg"
                />
              </div>

              {/* Name and info */}
              <div>
                <p className="uppercase text-xs">osunde</p>
                <h2>Marvelous</h2>
              </div>
            </div>

            <div className="divider divider-horizontal"></div>

            <div>
              <p className="uppercase text-xs">patient type</p>
              <h2 className="uppercase">private</h2>
            </div>

            <div className="divider divider-horizontal"></div>

            <div>
              <p className="uppercase text-xs">date of birth</p>
              <h2 className="uppercase">24th jan 2001</h2>
            </div>
          </div>
          <div>
            <a className="text-xs underline text-blue-500 cursor-pointer flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              {/* ---this is supposed to be a date picker  */}
              <span className='flex items-center justify-center ml-2'>23-January-2019</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <td>Vital</td>
                <td>Data</td>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <th>1.</th>
                <td>Blood pressure</td>
                <td>22</td>
              </tr>
              <tr>
                <th>2.</th>
                <td>Heart Rate</td>
                <td>12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VitalsHistory