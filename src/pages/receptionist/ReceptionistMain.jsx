import React from 'react'
import ReceptionistSidebar from './ReceptionistSidebar'
import { DefaultNavbar } from '../../components/DefaultNavbar';
import SheduleAppointments from './SheduleAppointments'

function ReceptionistMain() {
return (
    <section className="flex gap-6 overflow-x-hidden">
      <div>
        <ReceptionistSidebar />
      </div>
      <div className="text-xl text-black w-full bg-backgroundGray font-semibold">
        <div>
          {/* Navbar */}
          <DefaultNavbar />

          <section className="px-4">
            <SheduleAppointments />
          </section>
        </div>
      </div>
    </section>
  );
}

export default ReceptionistMain