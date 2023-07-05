"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import ThemeContext from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggleMode, mode } = useContext(ThemeContext);
  //   console.log("mode: ", mode);

  return (
    <div className={styles.container} onClick={toggleMode}>
      <BsMoonFill className={styles.moon} />
      <BsSunFill className={styles.sun} />
      <span
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></span>
    </div>
  );
};

export default ThemeToggle;
