// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <a href="#nav-bar">
        <KeyboardDoubleArrowUpIcon />
      </a>
    </button>
  );
};
