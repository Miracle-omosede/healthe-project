import React from 'react'
import DefaultSearch from './DefaultSearch';

export const DefaultNavbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Health<span className='text-red-600'>e</span></a>
        </div>
        <div className="flex-none">
            <div className='flex-1'>
                <DefaultSearch />
            </div>
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-lg">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
