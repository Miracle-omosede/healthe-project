import React from 'react'

function DashboardData() {
            const users = [
          {
            greeting: "Good Afternoon",
            firstname: "Dr Omokaro",
            lastname: "Fidelis",
          },
        ]
  return (
        <section className="px-4">
            {/* main content */}
            <div className="flex flex-col w-full  shadow-lg my-4 p-6 rounded-xl wave-background">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  {users?.map((user, i) => (
                    <div className="flex flex-col">
                      <p className="text-sm tracking-wide flex">
                        {user?.greeting}
                        <span className="ml-1 text-yellow-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            />
                          </svg>
                        </span>
                      </p>

                      <h2 className="my-2">
                        {user?.firstname} {user?.lastname}
                      </h2>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-end items-center font-300 text-darkGray text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>

                    <p>18th Jan 2023</p>
                  </div>

                  {/* Grid */}
                  <div className="py-2">
                    <div className="flex flex-row">
                      {/* grid 1 */}
                      <div className="flex flex-col text-green-500">
                        <p className="uppercase text-[12px] py-2">Patients</p>
                        <div className="flex flex-row">
                          <h2 className="text-[3rem]">105</h2>
                          <div className="flex items-center justify-center ml-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-3 h-3 text-darkGray"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                              />
                            </svg>

                            <p className="text-xs text-darkGray">0.5%</p>
                          </div>
                        </div>
                      </div>

                      <div className="divider lg:divider-horizontal py-5 before:bg-black after:bg-black"></div>

                      <div className="flex flex-col text-orange-500">
                        <p className="uppercase text-[12px] py-2">
                          appointments
                        </p>
                        <div className="flex flex-row">
                          <h2 className="text-[3rem]">99</h2>
                          <div className="flex items-center justify-center ml-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-3 h-3 text-darkGray rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                              />
                            </svg>

                            <p className="text-xs text-darkGray">0.2%</p>
                          </div>
                        </div>
                      </div>

                      <div className="divider lg:divider-horizontal  py-5 before:bg-black after:bg-black"></div>

                      <div className="flex flex-col text-blue-500">
                        <p className="uppercase text-[12px] py-2">visits</p>
                        <div className="flex flex-row">
                          <h2 className="text-[3rem]">200</h2>
                          <div className="flex items-center justify-center ml-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-3 h-3 text-darkGray"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                              />
                            </svg>

                            <p className="text-xs text-darkGray">1.5%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row w-full bg-white shadow-lg p-6 rounded-xl">
              <div className="w-full">
                {/* chart */}
                {/* <Chart /> */}
              </div>

              <div className="divider lg:divider-horizontal"></div>
            </div>
    </section>
  )
}

export default DashboardData