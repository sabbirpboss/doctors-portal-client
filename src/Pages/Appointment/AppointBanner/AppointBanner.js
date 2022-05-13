import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointBanner = ({date, setDate}) => {
  
  return (
    <div className="hero min-h-screen bg-nature-light">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="sm:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-lg rounded-lg shadow-2xl ml-4"
          alt="Dentist Chair"
        />
        <div className="2xl:mr-10">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointBanner;
