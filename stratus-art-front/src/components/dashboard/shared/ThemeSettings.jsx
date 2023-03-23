import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../../../assests/data/dummy";
import { useStateContex } from "../../../context/ContextProvider";

const ThemeSettings = () => {
  return (
    <div className="tw-bg-half-transparent tw-w-screen tw-fixed tw-nav-item tw-top-0 tw-right-0">
      <div className="tw-float-right tw-h-screen dark:tw-text-gray-200 tw-bg-white dark:[#484B52] tw-w-400">
        <div className="tw-flex tw-justify-between tw-items-center tw-p-4 tw-ml-4">
          <p className="tw-font-semibold tw-text-xl">Theme Settings</p>
          <button
            type="button"
            onClick={() => {}}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="tw-text-2xl tw-p-3 hover:tw-drop-shadow-xl hover:tw-bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="tw-flex-col tw-border-t-1 tw-border-color tw-p-4 tw-ml-4">
          <p className="tw-font-semibold tw-text-lg">Theme Options</p>
          <div className="tw-mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="tw-cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <label
              htmlFor="light"
              className="tw-ml-2 tw-cursor-pointer tw-text-md"
            >
              Light
            </label>
          </div>
          <div className="tw-mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="tw-cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <label
              htmlFor="dark"
              className="tw-ml-2 tw-cursor-pointer tw-text-md"
            >
              Dark
            </label>
          </div>
        </div>
        <div className="tw-flex-col tw-border-t-1 tw-border-color tw-p-4 tw-ml-4">
          <p className="tw-font-semibold tw-text-lg">Theme Colors</p>
          <div className="tw-flex tw-gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="tw-relative tw-mt-2 tw-cursor-pointer tw-flex tw-gap-5 tw-items-center">
                  <button
                    type="button"
                    className="tw-h-10 tw-w-10 tw-rounded-full tw-cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => {}}
                  >
                    <BsCheck
                      className={`tw-ml-2 tw-text-2xl tw-text-white ${
                        true ? "tw-block" : "tw-hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
