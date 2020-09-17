import React from "react";

type ButtonProps = {
  children: any;
  color: string;
  disabled?: boolean;
};

export default ({ children, color, disabled = false }: ButtonProps) => {
  let customClass = `w-96 m-4 text-left bg-transparent hover:bg-${color}-500 text-gray-700 font-normal hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded `;
  if (disabled) {
    customClass += " opacity-50 cursor-not-allowed";
  }
  return (
    <button disabled={disabled} id={children} className={customClass}>
      {children}
    </button>
  );
};
