import React from 'react'
import DefaultSearch from '../../components/DefaultSearch'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Consultation() {
  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-lg">
      <h1>Consultation Notes</h1>
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
                view history
              </a>
            </div>
          </div>

          <div className="my-6">
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                view vitals
              </div>
              <div className="collapse-content">
                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full">
                    <thead></thead>
                    <tbody className="text-sm">
                      <tr>
                        <th>Blood pressure</th>
                        <td>---</td>
                      </tr>
                      <tr>
                        <th>Heart rate</th>
                        <td>---</td>
                      </tr>
                      <tr>
                        <th>Temperature</th>
                        <td>---</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6">
            <h2 className="my-4">Notes</h2>
            <div>
              <CKEditor editor={ClassicEditor} />
            </div>
            <div className="flex flex-row w-full justify-between items-center my-4">
              <div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-4">Admit patient</span>
                    <input type="checkbox" className="toggle" checked />
                  </label>
                </div>
              </div>
              <div>
                <button class="btn btn-active btn-primary">Done</button>
              </div>
            </div>
          </div>

          <div className="my-6">
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                Prescriptions
              </div>
              <div className="collapse-content">
                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <td>Drug</td>
                        <td>Dosage</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <th></th>
                        <td>
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text-alt">
                                search by name...
                              </span>
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
                                Enter drug dossage...
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                            />
                          </div>
                        </td>
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
                        <td>2 X 3</td>
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

          <div className="my-6">
            <button className="btn btn-success text-black mt-8 gap-2">
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
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation