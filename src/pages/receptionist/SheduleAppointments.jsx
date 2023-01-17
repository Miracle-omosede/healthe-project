import React from 'react'

function SheduleAppointments() {
  return (
     <div className="bg-white flex flex-col m-4 p-4 rounded-xl">
      <div className="flex">
        <h1 className="font-semibold text-black text-3xl">Shedule Appointments</h1>
      </div>
      <div>
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
                <h1 className='text-xs'>Appointment Date</h1>
                <input type="date" className='text-xs'/>
            </div>
            <div>
                <h1 className='text-xs'>Appointment Time</h1>
                <input type="time" className='text-xs'/>
            </div>
            <div>
                <button className='btn btn-primary'>
                    save
                </button>
            </div>
          </div>
          </div>
      </div>
      <div className="flex my-4 items-center justify-between">
        <h1 className="text-black text-md tracking-tigher">Recent visits</h1>
        <form method="GET">
          <div className="relative text-darkGray focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-3 h-3"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="py-2 text-sm text-darkGray outline-1 outline-darkGray bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-darkgray"
              placeholder="Search patient..."
              autocomplete="off"
            />
          </div>
        </form>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full" data-theme="light">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>FullName</th>
              <th>Patient type</th>
              <th>Sex</th>
              <th>Contact Number</th>
              <th>Visit day</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://placeimg.com/80/80/people" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Jackson</div>
                    <div className="text-sm opacity-50">Daniels</div>
                  </div>
                </div>
              </td>
              <td>
                Private
                <br />
                <span className="bg-gray-200 rounded-lg py-1 px-1 text-xs">
                  ---
                </span>
              </td>
              <td>male</td>
              <td>+ 234-814-035-223-4</td>
              <td>Today</td>
              <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
                <button className="btn btn-ghost btn-xs">View</button>
              </th>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://placeimg.com/80/80/things" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice</div>
                    <div className="text-sm opacity-50">Offset</div>
                  </div>
                </div>
              </td>
              <td>
                HMO
                <br />
                <span className="bg-gray-200 rounded-lg py-1 px-1 text-xs">
                  Medicare plus
                </span>
              </td>
              <td>female</td>
              <td>+234-815-566-795-6</td>
              <td>
                Yesterday
                <br />
                <span className="text-xs flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  11:05pm
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
                <button className="btn btn-ghost btn-xs">View</button>
              </th>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th className="flex">
                <button className="btn btn-ghost btn-xs">
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <span> Delete Marked</span>
                </button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-5">
        <h1 className="my-5 text-black text-md tracking-tigher">Recently Added</h1>

        <div className="overflow-x-auto w-full">
          <table className="table w-full" data-theme="light">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>FullName</th>
                <th>Patient type</th>
                <th>Sex</th>
                <th>Contact Number</th>
                <th>Date Added</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <th className="text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://placeimg.com/80/80/animals" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Sheun</div>
                      <div className="text-sm opacity-50">Eniola</div>
                    </div>
                  </div>
                </td>
                <td>
                  HMO
                  <br />
                  <span className="bg-gray-200 rounded-lg py-1 px-1 text-xs">
                    Eva care plus
                  </span>
                </td>
                <td>female</td>
                <td>+ 234-814-035-223-4</td>
                <td>Today</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                  <button className="btn btn-ghost btn-xs">View</button>
                </th>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <th className='text-green-400'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://placeimg.com/80/80/things" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice</div>
                      <div className="text-sm opacity-50">Offset</div>
                    </div>
                  </div>
                </td>
                <td>
                  HMO
                  <br />
                  <span className="bg-gray-200 rounded-lg py-1 px-1 text-xs">
                    Medicare plus
                  </span>
                </td>
                <td>female</td>
                <td>+234-815-566-795-6</td>
                <td>
                  2/02/2022
                  <br />
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                  <button className="btn btn-ghost btn-xs">View</button>
                </th>
              </tr>
              {/* <!-- row 3 --> */}
              <tr>
                <th className='text-green-400'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://placeimg.com/80/80/men" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Nnamdi</div>
                      <div className="text-sm opacity-50">Justice</div>
                    </div>
                  </div>
                </td>
                <td>
                  private
                  <br />
                  <span className="bg-gray-200 rounded-lg py-1 px-1 text-xs">
                    ---
                  </span>
                </td>
                <td>male</td>
                <td>+234-815-566-795-6</td>
                <td>
                  2/02/2022
                  <br />
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                  <button className="btn btn-ghost btn-xs">View</button>
                </th>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SheduleAppointments