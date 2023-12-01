import  { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaCubes } from "react-icons/fa";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { PiMinusCircle } from "react-icons/pi";
import { PiPlusCircle } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    { name: "Dashboard", icon: <AiOutlineDashboard />, link: "/dashboard" },
    { name: "Assets", icon: <FaCubes />, link: "/assets" },
    { name: "Deposits", icon: <PiPlusCircle />, link: "/deposits" },
    { name: "Withdraw", icon: <PiMinusCircle />, link: "/withdraw" },
    { name: "Transactions", icon: <CiStar />, link: "/transactions" },
    { name: "Profile", icon: <FaUserCircle />, link: "/profile" },
    { name: "Subscription", icon: <MdOutlineFormatListBulleted />, link: "/subscription",},
    { name: "Verification", icon: <FaUserCheck />, link: "/verification" },
    { name: "Logout", icon: <FaSignOutAlt />, link: "/logout" },
  ];

  return (
    <section className="flex">
      <div
        className={`bg-[#030a2c] min-h-screen ${
          open ? "w-60" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="flex justify-end my-4">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          {menus.map((menu, index) => (
            <Link
              to={menu.link}
              key={index}
              className={`group flex items-center text-[14px] gap-4 py-4 px-2 hover:bg-[#3454f5] hover:text-white rounded-md ${index === 0 && 'bg-[#3454f5]'}`}
            >
                <div className="text-[14px]">{menu.icon}</div>
                <h2
                style={{
                  transitionDelay: `${index + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 text-[14px] ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white  whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu.name}
              </h2>
              {/* <div className={`flex items-center gap-4 py-4 hover:bg-[#3454f5] hover:text-white rounded-md ${index === 0 && 'bg-[#3454f5]'}`}>
                        <div className="text-[14px] pl-2">{menu.icon}</div>
                        <div className="text-[14px]">{menu.name}</div>
                    </div> */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
