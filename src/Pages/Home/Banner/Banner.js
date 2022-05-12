import React from "react";
import chair from "../../../assets/images/chair.png";
const Banner = () => {
  return (
      <div className="hero-pattern bg-nature-light">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="sm:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-lg rounded-lg shadow-2xl ml-4" alt="Banner" />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button class="btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
