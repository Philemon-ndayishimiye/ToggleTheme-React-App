import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function Toogle() {
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    console.log("hello every one");
    setIsDark(!isDark);
  };
  return (
    <body className={isDark ? "bg-black text-white" : "bg-white text-black"}>
      {isDark ? (
        <MdDarkMode
          onClick={handleTheme}
          className="text-5xl absolute top-0 right-4  cursor-pointer"
        />
      ) : (
        <CiLight
          onClick={handleTheme}
          className="text-5xl absolute top-3 right-4 text-yellow-300 cursor-pointer"
        />
      )}

     </body>
  );
}
