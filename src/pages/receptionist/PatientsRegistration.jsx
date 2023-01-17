import React from 'react'

function PatientsRegistration() {
  return (
    <div className="p-4 m-4 rounded-lg shadow-lg bg-white">
      <h2 className="py-4">Patient's registration</h2>
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Firstname</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Lastname</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div className="flex flex-row gap-3 my-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Date of birth</span>
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div className="flex flex-row gap-3 my-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Patient type</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>HMO</option>
              <option>Private</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Upload image</span>
            </label>
            <input type="file" className="file-input w-full max-w-xs" />
          </div>
        </div>

        <div className="flex flex-row gap-3 my-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                select gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input type="email" className="file-input w-full max-w-xs" />
          </div>
        </div>

        <div className="flex">
          <button className="btn btn-secondary">save user</button>
        </div>
      </div>
    </div>
  );
}

export default PatientsRegistration