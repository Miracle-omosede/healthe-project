import React from 'react'

const DefaultSearch = () => {
  return (
    <div>
      <form method="GET">
        <div class="relative text-darkGray focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
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
                class="w-4 h-4"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            class="py-2 text-sm text-darkGray outline-1 outline-darkGray bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-darkgray"
            placeholder="Search..."
            autocomplete="off"
          />
        </div>
      </form>
    </div>
  );
}

export default DefaultSearch