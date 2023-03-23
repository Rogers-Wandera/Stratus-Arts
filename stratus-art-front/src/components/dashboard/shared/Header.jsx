import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="tw-mb-10">
      <p className="tw-text-gray-400">{category}</p>
      <p className="tw-text-3xl tw-font-extrabold tw-tracking-tight tw-text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
