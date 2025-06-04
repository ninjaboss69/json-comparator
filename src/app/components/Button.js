"use client";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-green-600 to-green-900 hover:from-blue-700 hover:to-indigo-700 transition duration-200 shadow-md hover:shadow-lg active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
