import useAnimation from "@/hooks/useAnimation";
import Image from "next/image";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <>
      <section className="landing-page bg-cover">
        <div
          className={`transition backdrop-brightness-50 sm:py-64 py-80 duration-300 ease-in-out`}
        >
          <div className="hidden sm:flex justify-center">
            <h1 className="static justify-center tag-line">
              Where Cozy Vibes Meet Mountain Brews <br></br>Your Perfect Escape
              Awaits
            </h1>
          </div>
          <div className="sm:hidden justify-center">
            <h1 className="static justify-center tag-line">
              Where Cozy Vibes Meet Perfect Mountain Brews<br></br>
              <br></br> Your Perfect Escape Awaits
            </h1>
          </div>

          <div className="flex justify-center">
            <button className="absolute color-green text-white font-semibold text-[20px] bg-forestGreen rounded-xl pl-10 pr-10 py-5 hover:bg-dustyRose bottom-40">
              Have a coffee
            </button>
          </div>
        </div>
      </section>
      <div>
        <div className="bg-sageGreen p-16 mb-3 bg-gradient-to-b from-sageGreen to-gray-400"></div>
        <div className="bg-sageGreen p-[2px] bg-gradient-to-b from-sageGreen to-gray-400"></div>
      </div>
    </>
  );
}
