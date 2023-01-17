import React from 'react'

function TakeVitals() {
  return (
    <div className="p-4 m-4 bg-white shadow-lg rounded-lg">
        <h1 className='py-10'>Take vital Signs</h1>
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
            <a className="text-xs underline text-blue-500 cursor-pointer">
              view patient vitals history
            </a>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <td>Vital</td>
                <td>Data</td>
                <td></td>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <th></th>
                <td>
                  <div className="form-control w-full max-w-xs">
                    <select className="select select-bordered">
                      <option disabled selected>
                        select vitals
                      </option>
                      <option>Blood Pressure</option>
                      <option>Pulse rate</option>
                      <option>Temperature </option>
                      <option>Respiratory Rate</option>
                      <option>Saturation pressure of oxygen</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div className="form-control w-full max-w-xs">
                    <input
                      type="text"
                      placeholder="Enter value"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </td>
                <td className="">
                  <button className="btn btn-success text-white gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                    Add
                  </button>
                </td>
              </tr>
              <tr>
                <th>1.</th>
                <td>Blood pressure</td>
                <td>22</td>
                <td className="text-blue-600 cursor-pointer flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <span className='justify-center flex items-center'>EDIT</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex w-full justify-end items-end my-4">
            <button class="btn btn-active btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeVitals