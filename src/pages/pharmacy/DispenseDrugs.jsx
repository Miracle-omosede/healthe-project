import React from 'react'

function DispenseDrugs() {
return (
  <div className="p-4 m-4 bg-white shadow-lg rounded-lg">
    <h1 className='my-10'>Dispense Drugs</h1>
    <div className="px-4">
      <h1 className='py-4'>Patients Info</h1>
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
        </div>
      </div>

      {/* Doctors prescription */}
      <div className='my-10'>
        <h1>Doctor's Prescription</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead></thead>
            <tbody className="text-sm">
              <tr>
                <th>Paracetamol tab</th>
                <td>2x2</td>
              </tr>
              <tr>
                <th>ibucap</th>
                <td>2x3</td>
              </tr>
              <tr>
                <th>Amoxicillin</th>
                <td>---</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Dispense */}
      <div className="collapse-title text-xl font-medium">Dispense Drug</div>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <td>Drug</td>
                <td>Quantity</td>

                <td>Price</td>
                <td></td>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <th></th>
                <td>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text-alt">search by name...</span>
                    </label>
                    <select className="select select-bordered">
                      <option disabled selected>
                        Availible drugs
                      </option>
                      <option>Amodaquine</option>
                      <option>Paracetamol</option>
                      <option>Ibucap</option>
                      <option>Panadol</option>
                      <option>Amoxillin</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text-alt">
                        Enter drug Quantity...
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </td>
                <td></td>
                <td className="">
                  <button className="btn btn-success text-white mt-8 gap-2">
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
                <td>Amodaquine Tab</td>
                <td>2 </td>
                <td>N240</td>
                <td className="text-red-600 cursor-pointer">
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex w-full justify-end items-end my-4">
            <button class="btn btn-active btn-primary">Done</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default DispenseDrugs