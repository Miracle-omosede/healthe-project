import React from 'react'
import { DefaultNavbar } from "../../components/DefaultNavbar";
import DispenseDrugs from './DispenseDrugs';
import PharmacySidebar from './PharmacySidebar';

function PharmacyMain() {
  return (
    <section className="flex gap-6 overflow-x-hidden">
      <div>
        <PharmacySidebar />
      </div>
      <div className="text-xl text-black w-full bg-backgroundGray font-semibold">
        <div>
          {/* Navbar */}
          <DefaultNavbar />

          <section className="px-4">
            <DispenseDrugs />
          </section>
        </div>
      </div>
    </section>
  );
}

export default PharmacyMain