import React from 'react'
import { DefaultNavbar } from "../../components/DefaultNavbar";
import DoctorsSidebar from './DoctorsSidebar';
// import DashboardData from './DashboardData';
// import Appointments from "./Appointments"
// import Consultation from "./Consultation"        
import PatientsHistory from "./PatientsHistory"        

function DoctorsMain() {
  return (
    <section className="flex gap-6 overflow-x-hidden">
      <div>
        <DoctorsSidebar />
      </div>
      <div className="text-xl text-black w-full bg-backgroundGray font-semibold">
        <div>
          {/* Navbar */}
          <DefaultNavbar />

          <section>
            {/* <DashboardData /> */}
            {/* <Appointments /> */}
            {/* <Consultation /> */}
            <PatientsHistory />
          </section>
        </div>
      </div>
    </section>
  );
}

export default DoctorsMain