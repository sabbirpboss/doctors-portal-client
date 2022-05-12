import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard/InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hours"
        cardInfo="Lorem Ipsum is simply dummy text of the pri"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        iconName="Clock"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Visit Our Location"
        cardInfo="Brooklyn, NY 10036, United States"
        bgClass="bg-accent"
        iconName="Marker"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us Now"
        cardInfo="+000 123 456789"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        iconName="Phone"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
