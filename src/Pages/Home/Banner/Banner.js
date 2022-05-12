import React from "react";
import chair from "../../../assets/images/chair.png";
import MainBtn from "../Shared/MainBtn";
const Banner = () => {
  return (
      <div className="hero-pattern bg-nature-light">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="sm:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-lg rounded-lg shadow-2xl ml-4" alt="Banner" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <MainBtn>Get Started</MainBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
