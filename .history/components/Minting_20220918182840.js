import React from "react";

const Minting = () => {
  return (
    <div className="container max-w-screen-lg w-full z-50">
      <div className="max-w-screen-sm mt-[-200px] w-1/3 bg-black flex flex-col">
        <div className="uppercase text-3xl italic font-bold mt-3">
          <h2>
            Welcome to <br /> the Bored Ape <br /> Yach Club
          </h2>
          <div className="flex p px-2 pb-2 pr-2">
            <button className="bg-[#bfc500] hover:bg-white text-black font-bold py-2 px-4 rounded uppercase grow">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minting;
