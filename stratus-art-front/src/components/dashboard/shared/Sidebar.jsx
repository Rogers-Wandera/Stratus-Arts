import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../../assests/data/dummy";
import { useStateContex } from "../../../context/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContex();
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "tw-flex tw-items-center tw-gap-5 tw-pl-4  tw-pt-3 tw-pb-2.5 tw-rounded-lg tw-text-gray tw-text-md tw-m-2";
  const normalLink =
    "tw-flex tw-items-center tw-gap-5 tw-pl-4  tw-pt-3 tw-pb-2.5 tw-rounded-lg tw-text-md tw-text-gray-700 dark:tw-text-gray-200 dark:hover:tw-text-black hover:tw-bg-light-gray tw-m-2";
  return (
    <div className="tw-ml-3 tw-h-screen md:tw-overflow-hidden tw-overflow-auto md:hover:tw-overflow-auto tw-pb-10">
      {activeMenu && (
        <>
          <div className="tw-flex tw-justify-between tw-items-center">
            <Link
              to="/dashboard"
              onClick={handleCloseSideBar}
              className="items-center tw-gap-3 tw-ml-3 tw-mt-4 tw-flex tw-text-xl tw-font-extrabold tw-tracking-tight dark:tw-text-white tw-text-slate-900"
            >
              <SiShopware /> <span>Stratus Arts</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                className="tw-text-xl tw-rounded-full tw-p-3 hover:tw-bg-light-gray tw-mt-4 tw-block md:tw-hidden"
                onClick={() => setActiveMenu((prev) => !prev)}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((link) => (
              <div key={link.title}>
                <p className="tw-text-gray-400 tw-m-3 tw-mt-4 tw-uppercase">
                  {link.title}
                </p>
                {link.links.map((item) => (
                  <NavLink
                    to={`/${item.link}`}
                    key={item.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {item.icon}
                    <span className="tw-capitalize">{item.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
