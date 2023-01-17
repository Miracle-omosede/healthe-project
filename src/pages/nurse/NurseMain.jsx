import React from 'react'
import { DefaultNavbar } from "../../components/DefaultNavbar";
import NurseSidebar from './NurseSidebar';
import VitalsHistory from './VitalsHistory';
// import TakeVitals from './TakeVitals';
// import DashboardData from '../../components/DashboardData'

function NurseMain() {
  return (
    <section className="flex gap-6 overflow-x-hidden">
      <div>
        <NurseSidebar />
      </div>
      <div className="text-xl text-black w-full bg-backgroundGray font-semibold">
        <div>
          {/* Navbar */}
          <DefaultNavbar />

          <section className="px-4">
            {/* main content */}
            {/* <DashboardData /> */}
            {/* <TakeVitals /> */}
            <VitalsHistory />
          </section>
        </div>
      </div>
    </section>
  );
}

export default NurseMain