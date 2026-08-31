import React, { useEffect, useState } from "react";
import Light from "../../Images/Light.png";
import Dark from "../../Images/Dark.png";

const ThemeMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });
  return (
    <div>
      {" "}
      <div className="md:h-10 flex items-center max-md:w-7 md:ml-6">
        {theme === "dark" ? (
          <img
            src={Light}
            alt="Light"
            className={`md:w-full h-8 w-15 md:h-12 cursor-pointer transition-all duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        ) : (
          <img
            src={Dark}
            alt="dark"
            className={`md:w-full h-8 w-15 md:h-12 cursor-pointer transition-all duration-300 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeMode;
