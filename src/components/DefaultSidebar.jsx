import React, { useState } from 'react'
import { HiMenuAlt3 } from  "react-icons/hi";
import { MdOutlineDashboard } from  "react-icons/md";
import { RiSettings4Line } from  "react-icons/ri";
import { TbReportAnalytics } from  "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from  "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from  "react-icons/fi";
// import { Link } from "react-router-dom";

function DefaultSidebar() {
        const menus = [
          { name: "dashboard", link: "./", icon: MdOutlineDashboard },
          { name: "user", link: "./", icon: AiOutlineUser },
          { name: "messages", link: "./", icon: FiMessageSquare },
          {
            name: "analytics",
            link: "./",
            icon: TbReportAnalytics,
            margin: true,
          },
          { name: "File Manager", link: "./", icon: FiFolder },
          { name: "cart", link: "./", icon: FiShoppingCart, margin: true },
          { name: "Saved", link: "./", icon: AiOutlineHeart },
          { name: "Setting", link: "./", icon: RiSettings4Line },
        ];
        const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-white min-h-screen ${
        open ? "w-72" : "w-16"
      } px-3 duration-500`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 pl-3 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <a
            href="#"
            className={` ${menu?.margin && "mt-5"} ${
              !open && "hover:bg-transparent hover:text-blue-500"
            } flex items-center text-sm group gap-3.5 font-medium p-2 hover:bg-lightBlue rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{ transitionDelay: `${i + 3}00ms` }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-darkGray rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-20 group-hover:duration-300 w-0 overflow-hidden group-hover:w-fit `}
            >
              {menu?.name}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
}

export default DefaultSidebar