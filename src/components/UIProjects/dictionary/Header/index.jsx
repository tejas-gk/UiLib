import { useState, useEffect } from "react";
import { ArrowDown } from "react-feather";

export default function index() {
  return (
    <div
      className="flex  justify-center items-center h-20 w-full 
    "
    >
      <img
        src="/assets/dictionary/assets/images/logo.svg"
        alt="dictionary logo"
      />
      <div
        className="flex items-center w-1/2  justify-end gap-2
      "
      >
        <h2>Sans-serif</h2>
        <img
          src="/assets/dictionary/assets/images/icon-arrow-down.svg"
          alt="arrow down"
        />
        <span className="text-gray-400">|</span>
        <div className="form-check form-switch">
          <input
            className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        <img
          src="/assets/dictionary/assets/images/icon-moon.svg"
          alt="moon icon"
        />
      </div>
    </div>
  );
}
