import React from "react";

const Button = ({ bgColor, text, color, borderRadius, size }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`tw-text-${size} tw-p-3 hover:tw-drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
