import React from "react";
import MainBtn from "../../../Home/Shared/MainBtn";

const Booking = ({ booking }) => {
  const { name, slots } = booking;
  return (
    <div class="card text-neutral-content shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary text-xl font-semibold">{name}</h2>
        <p className="uppercase text-black text-xs">
          {slots.length < 10 ? 0 : 0}
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div class="card-actions justify-end">
          <MainBtn>Book Appointment</MainBtn>
        </div>
      </div>
    </div>
  );
};

export default Booking;
