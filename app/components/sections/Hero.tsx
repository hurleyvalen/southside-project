import React from "react";

const Hero = () => {
  return (
    <>
      <section className="landing-page bg-cover bg-center">
        <div className="backdrop-brightness-50 sm:py-64 py-80 ">
          <div className="hidden sm:flex justify-center">
            <h1 className="static justify-center tag-line ">
              Where Cozy Vibes Meet Mountain Brews <br></br>Your Perfect Escape
              Awaits
            </h1>
          </div>
          <div className="sm:hidden ">
            <h1 className="static tag-line">
              Where Cozy Vibes Meet Perfect Mountain Brews
            </h1>
            <h1 className="static tag-line">Your Perfect Escape Awaits</h1>
          </div>

          <div className="flex justify-center">
            <button className="absolute text-white font-semibold text-[20px] bg-forestGreen rounded-xl pl-10 pr-10 py-5 hover:bg-sageGreen bottom-52 sm:bottom-40 transition ease-in-out duration-300">
              Have a coffee
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
