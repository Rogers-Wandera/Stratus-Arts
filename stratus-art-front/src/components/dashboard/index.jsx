import React from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { NavBar, Footer, Sidebar, ThemeSettings } from "./Dashboard";
import { Outlet } from "react-router-dom";
import { useStateContex } from "../../context/ContextProvider";

const Dashboard = () => {
  const { activeMenu } = useStateContex();
  return (
    <div className="tw-flex tw-relative dark:tw-bg-main-dark-bg">
      <div
        className="tw-fixed tw-right-4 tw-bottom-4"
        style={{ zIndex: "1000" }}
      >
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            className="tw-text-3xl tw-p-3 hover:tw-drop-shadow-xl hover:tw-bg-light-gray tw-text-white"
            style={{ background: "blue", borderRadius: "50%" }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className="tw-w-72 tw-fixed tw-sidebar dark:tw-bg-secondary-dark-bg tw-bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="tw-w-0 dark:tw-bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={`dark:tw-bg-main-bg tw-bg-main-bg tw-min-h-screen tw-w-full ${
          activeMenu ? "md:tw-ml-72" : "tw-flex-2"
        }`}
      >
        <div className="tw-fixed md:tw-static tw-bg-main-bg dark:tw-bg-main-dark-bg tw-navbar tw-w-full">
          <NavBar />
        </div>
        <ThemeSettings />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
