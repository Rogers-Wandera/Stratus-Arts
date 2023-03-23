import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import {
  Stacked,
  Pie,
  Button,
  SparkLine,
} from "../../../components/dashboard/Dashboard";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../../../assests/data/dummy";
import { useStateContex } from "../../../context/ContextProvider";

const DashboardHome = () => {
  return (
    <div className="tw-mt-12">
      <div className="tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-justify-center">
        <div className="tw-bg-white dark:tw-text-gray-200 dark:tw-bg-secondary-dark-bg tw-h-44 tw-rounded-xl tw-w-full lg:tw-w-80 tw-p-8 tw-m-3 tw-bg-hero-pattern tw-bg-no-repeat tw-bg-cover tw-bg-center">
          <div className="tw-flex tw-jsutify-between tw-items-center">
            <div>
              <p className="tw-font-bold tw-text-gray-400">Earnings</p>
              <p className="tw-text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="tw-mt-1">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="tw-flex tw-m-3 tw-flex-wrap tw-justify-center tw-gap-1 tw-items-center">
          {earningData.map((earning) => (
            <div
              key={earning.title}
              className="tw-bg-white dark:tw-text-gray-200 dark:tw-bg-secondary-dark-bg md:tw-w-56 tw-p-4 tw-pt-9 tw-rounded-2xl"
            >
              <button
                type="button"
                style={{
                  color: earning.iconColor,
                  backgroundColor: earning.iconBg,
                }}
                className="tw-text-2xl tw-opacity-0.9 tw-rounded-full tw-p-4 hover:tw-drop-shadow-xl"
              >
                {earning.icon}
              </button>
              <p className="tw-mt-3">
                <span className="tw-text-lg tw-font-semibold">
                  {earning.amount}
                </span>
                <span
                  className={`tw-text-sm tw-text-${earning.pcColor} tw-ml-2`}
                >
                  {earning.percentage}
                </span>
              </p>
              <p className="tw-text-sm tw-text-gray-400 tw-mt-1">
                {earning.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="tw-flex tw-gap-10 tw-flex-wrap tw-justify-center">
        <div className="tw-bg-white dark:tw-text-gray-200 dark:tw-bg-secondary-dark-bg tw-m-3 tw-p-4 tw-rounded-2xl md:tw-w-780">
          <div className="tw-flex tw-justify-between">
            <p className="tw-font-semibold tw-text-xl">Revenue Updates</p>
            <div className="tw-flex tw-items-center tw-gap-4">
              <p className="tw-flex tw-items-center tw-gap-2 tw-text-gray-600 hover:tw-drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expenses</span>
              </p>
              <p className="tw-flex tw-items-center tw-gap-2 tw-text-green-400 hover:tw-drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="tw-mt-10 tw-flex tw-gap-10 tw-flex-wrap tw-justify-center">
            <div className="tw-border-r-1 tw-border-color tw-m-4 tw-pr-10">
              <div>
                <p>
                  <span className="tw-text-3xl tw-font-semibold"> $34,567</span>
                  <span className="tw-p-1.5 hover:tw-drop-shadow-xl tw-cursor-pointer tw-rounded-full tw-text-white tw-bg-green-400 tw-m1-3">
                    25%
                  </span>
                </p>
                <p className="tw-text-gray-500 tw-mt-1">Budget</p>
              </div>
              <div className="tw-mt-5">
                <p>
                  <span className="tw-text-3xl tw-font-semibold"> $15,567</span>
                </p>
                <p className="tw-text-gray-500 tw-mt-1">Expenses</p>
              </div>
              <div className="tw-mt-5">
                <SparkLine
                  currentColor="blue"
                  id="linesparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className="tw-mt-10">
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
