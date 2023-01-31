import React, { useState } from "react";
export default function PasswordGenerator() {
  const [buttonOn, setButtonOn] = useState(true);
  const [password, setPassword] = useState("PTx1f5DaFX");
  const [range, setRange] = useState(10);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [passwordLength, setPasswordLength] = useState(10);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleRange = (e) => {
    setRange(e.target.value);
    setPasswordLength(e.target.value);
  };

  const handleUpperCase = () => {
    setUpperCase(!upperCase);
    setPasswordStrength(1);
  };

  const handleLowerCase = () => {
    setLowerCase(!lowerCase);
    setPasswordStrength(2);
  };

  const handleNumbers = () => {
    setNumbers(!numbers);
    setPasswordStrength(3);
  };

  const handleSymbols = () => {
    setSymbols(!symbols);
    setPasswordStrength(4);
  };

  const handleGenerate = () => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbersLetters = "0123456789";
    const symbolsLetters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let charSet = "";
    if (upperCase) {
      charSet += upperCaseLetters;
    }
    if (lowerCase) {
      charSet += lowerCaseLetters;
    }
    if (numbers) {
      charSet += numbersLetters;
    }
    if (symbols) {
      charSet += symbolsLetters;
    }
    let password = "";
    for (let i = 0; i < range; i++) {
      const character = Math.floor(Math.random() * charSet.length);
      password += charSet.substring(character, character + 1);
    }
    setPassword(password);

    const passwordStrength = document.getElementById("password-bars");

    for (let i = 0; i < passwordStrength.children.length; i++) {
      passwordStrength.children[i].classList.remove("bg-[#FF5F56]");
    }
    for (let i = 0; i < passwordStrength.children.length; i++) {
      if (i < passwordStrength) {
        passwordStrength.children[i].classList.add("bg-[#FF5F56]");
      }
    }
  };

  return (
    <div className="bg-[#111116] w-screen h-screen flex justify-center items-center flex-col">
      <h2 className="text-[#676576] text-center my-3 text-lg">
        Password Generator
      </h2>
      <div className="w-[90%] max-w-[540px] mx-8 ">
        <div className="w-full p-5 flex  justify-between items-center bg-[#24232a]">
          <h1 id="password" className="text-[#E6E5EA]">
            {password}
          </h1>
          <img
            src="/assets/password-generator/icon-copy.svg"
            onClick={() => {
              navigator.clipboard.writeText(password);
            }}
            className="cursor-pointer"
            alt="Copy logo"
          />
        </div>
        <div className="mt-5 p-5 bg-[#24232a]">
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-between items-center  mb-5">
              <label className="text-[#E6E5EA]">Character Length</label>
              <h2 className="text-[#A4FFAF]">{passwordLength}</h2>
            </div>
            <input
              onChange={handleRange}
              className="slider rounded-full h-4 w-full active:bg-red-400
                    "
              type="range"
              min="10"
              max="30"
              defaultValue="20"
              step="1"
            />
            <div>
              <div className="flex mt-5">
                <input
                  type="checkbox"
                  className={`${buttonOn ? "bg-[#A4FFAF]" : "bg-[#18171f]"}`}
                  onClick={handleUpperCase}
                />
                <p className="ml-5 text-white">Include UpperCase Letters</p>
              </div>
              <div className="flex mt-5">
                <input
                  type="checkbox"
                  className={`${buttonOn ? "bg-[#A4FFAF]" : "bg-[#18171f]"}`}
                />
                <p className="ml-5 text-white">Include LowerCase Letters</p>
              </div>

              <div className="flex mt-5">
                <input
                  type="checkbox"
                  className={`${buttonOn ? "bg-[#A4FFAF]" : "bg-[#18171f]"}`}
                />
                <p className="ml-5 text-white">Include Numbers</p>
              </div>

              <div className="flex mt-5">
                <input
                  type="checkbox"
                  className={`${buttonOn ? "bg-[#A4FFAF]" : "bg-[#18171f]"}`}
                />
                <p className="ml-5 text-white">Include Symbols</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center  mb-5 bg-[#18171f] mt-5 p-5  ">
              <p className="text-[#62606d]">Strength</p>
              <div className="flex items-center">
                <div className="flex items-center">
                  <div
                    id="password-bars"
                    className="w-3 h-7 border ml-2 border-[#e6e5ea]"
                  ></div>
                  <div
                    id="password-bars"
                    className="w-3 h-7 border ml-2 border-[#e6e5ea]"
                  ></div>
                  <div
                    id="password-bars"
                    className="w-3 h-7 border ml-2 border-[#e6e5ea]"
                  ></div>
                  <div
                    id="password-bars"
                    className="w-3 h-7 border ml-2 border-[#e6e5ea]"
                  ></div>
                </div>
              </div>
            </div>
            <button
              onClick={handleGenerate}
              className="bg-[#a5ffaf] text-gray-800 p-5 uppercase"
            >
              Generate →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
