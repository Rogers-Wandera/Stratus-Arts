import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../../../assests/data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "../Dashboard";
import { useStateContex } from "../../../context/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="tw-relative tw-text-xl tw-rounded-full tw-p-3 hover:tw-bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="tw-absolute tw-inline-flex tw-rounded-full tw-h-2 tw-w-2 tw-right-2 tw-top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const NavBar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContex();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="tw-flex tw-justify-between tw-p-2 md:tw-mx-6 tw-relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="tw-flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color="blue"
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          color="blue"
          dotColor="#03C9D7"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
          onClick={() => handleClick("userProfile")}
        >
          <div className="tw-flex tw-text-center tw-gap-2 tw-cursor-pointer tw-p-1 hover:tw-bg-light-gray tw-rounded-lg">
            <img
              className="tw-rounded-full tw-w-8 tw-h-8"
              src={avatar}
              alt="user-profile"
            />
            <span className="tw-text-gray-400 tw-text-14">Hi,</span>{" "}
            <span className="tw-text-gray-400 tw-font-bold tw-ml-1 tw-text-14">
              Rogers
            </span>
            <MdKeyboardArrowDown className="tw-text-gray-400 tw-text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavBar;
