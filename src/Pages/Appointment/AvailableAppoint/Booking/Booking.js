import React from "react";
import MainBtn from "../../../Home/Shared/MainBtn";

const Booking = ({ booking }) => {
  const { name, slots } = booking;
  return (
    <div class="card text-neutral-content shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary text-xl font-semibold">{name}</h2>
        <p className="uppercase text-sm font-light text-black">
          {slots.length > 0 ? (
            <span title="Available. Hit the Button for Booking Now">
              {slots[0]}
            </span>
          ) : (
            <span
              title="Please Don't Worry. Try Again Later."
              className="text-red-500"
            >
              Alas ! Time Booked
            </span>
          )}
        </p>
        <p className="uppercase text-black text-xs font-light">
          {slots.length < 10 ? 0 : 0}
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div class="card-actions justify-end">
            {
            slots.length === 0
            ?
            <button disabled className="btn bg-base-200">Book Appointment</button>
            :
            <MainBtn>Make Appointment</MainBtn>
            }
        </div>
      </div>
    </div>
  );
};

export default Booking;
