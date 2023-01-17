import React from 'react'
import DefaultSearch from '../../components/DefaultSearch'

function PatientData() {
  return (
      <div className="p-4 m-4 bg-white rounded-lg shadow-lg">
        <h1>Patient History</h1>
        <div className="flex flex-col w-full">
          <div className="flex relative justify-end items-end">
            <DefaultSearch />
          </div>

          <div className="m-3 p-2">
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
              </div>
              {/* <div>
              <a className="text-xs underline text-blue-500 cursor-pointer">
                view history
              </a>
            </div> */}
            </div>

            <div className="my-6">
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
              >
                <div className="collapse-title text-sm font-medium">
                  Personal Info
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                      <thead></thead>
                      <tbody className="text-sm">
                        <tr>
                          <th className="uppercase">FirstName</th>
                          <td>Osunde</td>
                        </tr>
                        <tr>
                          <th className="uppercase">LastName</th>
                          <td>Marvelous</td>
                        </tr>
                        <tr>
                          <th className="uppercase">Date of Birth</th>
                          <td>23-may-2001</td>
                        </tr>
                        <tr>
                          <th className="uppercase">Gender</th>
                          <td>Female</td>
                        </tr>
                        <tr>
                          <th className="uppercase">Patient Type</th>
                          <td>HMO</td>
                        </tr>
                        <tr>
                          <th className="uppercase">HMO Managers</th>
                          <td>Medi Healthcare</td>
                        </tr>
                        <tr>
                          <th className="uppercase">Phone Number</th>
                          <td>+234-814-79-683-21</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-end justify-end">
                <h1 className="text-xs">search record by visit date...</h1>
                <input type="date" className="text-xs mx-4" />
              </div>
            </div>

            <div className="my-6">
              <div>
                <h2 className="flex text-xs items-center justify-start px-4 py-3">
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                  <span>28-May-2022</span>
                </h2>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
              >
                <div className="collapse-title text-sm font-medium">
                  view details
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <div className="uppercase flex w-full justify-end items-end py-6">
                      <p className="text-xs flex justify-end items-end px-3">
                        consultation fee
                      </p>
                      <h1 className="text-xl flex justify-end items-end">
                        n2850
                      </h1>
                    </div>
                  </div>

                  <div className="overflow-x-auto my-10">
                    <h1 className="py-4">Drugs</h1>
                    <table className="table table-zebra w-full text-sm">
                      <thead>
                        <tr>
                          <th></th>
                          <td>DRUGS</td>
                          <td>QTY</td>
                          <td>COST</td>
                          <td>PRICE</td>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <th>1</th>
                          <td>Pracetamol sachet</td>
                          <td>2</td>
                          <td>N250</td>
                          <td>N500</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Tramadol</td>
                          <td>1</td>
                          <td>N150</td>
                          <td>N150</td>
                        </tr>
                        <tr>
                          <th></th>
                          <td></td>
                          <td></td>
                          <td>TOTAL</td>
                          <td>N650</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-col justify-end items-end">
                    <h3 className="text-sm">
                      Grand Total <span className="text-xl">N2850</span>
                    </h3>
                    <button className="btn btn-sucess">Reprint Receipt</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PatientData