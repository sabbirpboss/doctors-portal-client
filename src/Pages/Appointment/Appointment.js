import React, { useState } from "react";
import Footer from "../Home/Footer/Footer";
import AppointBanner from "./AppointBanner/AppointBanner";
import AvailableAppoint from "./AvailableAppoint/AvailableAppoint";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="px-12">
      <AppointBanner date={date} setDate={setDate}></AppointBanner>
      <AvailableAppoint date={date} setDate={setDate}></AvailableAppoint>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
