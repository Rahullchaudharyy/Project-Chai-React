import React from "react";

const Home = () => {
  return (
    <div className="h-screen overflow-x-hidden w-[100vw] bg-[#080808] flex flex-col md:flex-row">
      <div className=" h-full w-[100%] md:w-[50%] flex  items-center p-[10vmin]">
        <div className="h-[90%] w-full flex justify-center flex-col">
          <div className="h-[50%] w-full pl-[2vmin] leading-1">
            <h3 className="text-[3vmin] text-white font-semibold leading-3">
              {" "}
              Welcome Coders !
            </h3>
            <h1 className="text-[8vmin] text-white font-bold leading-[10vmin]">
              Home for
            </h1>
            <h1 className="text-[#EF6C00] font-bold text-[8vmin] leading-[10vmin]">
              Programmers
            </h1>

            <button to="/" className="p-4 py-3  text-white bg-[#EF6C00] rounded-lg w-[50%] mt-[4vmin]">
              Let's Code 
            </button>
          </div>
        </div>
      </div>
      <div className=" h-full w-[100%] md:w-[50%] flex  items-center justify-center p-[10vmin]">
        <div className="  h-[90%] w-full flex flex-col">
          <img
            className="h-auto w-auto"
            src="https://imgproxy.learnyst.com/https://learnyst-user-assets-cdn.learnyst.com/websites/171024/images/hc_lyst1715536760466.png?w=0&h=0&resizetype=fill"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
