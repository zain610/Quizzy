import React from "react";

type ButtonProps = {
  children: any;
  disabled?: boolean;
  selectedColor?: string;
};

export default ({
  children,
  disabled = false,
  selectedColor = "",
}: ButtonProps) => {
  let customClass = `w-96 m-4 text-left bg-transparent hover:bg-blue-500 text-gray-700 font-normal hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded `;
  if (disabled) {
    customClass = `w-96 m-4 text-left bg-transparent bg-${selectedColor}-500 text-gray-700 font-normal py-2 px-4 border border-blue-500 hover:border-transparent rounded opacity-90 cursor-not-allowed`;
  }
  return (
    <button
      disabled={disabled}
      id={children}
      className={customClass}
      dangerouslySetInnerHTML={{ __html: children }}
    ></button>
  );
};
