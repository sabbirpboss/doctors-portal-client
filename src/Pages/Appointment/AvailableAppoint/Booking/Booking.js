import React from "react";
import MainBtn from "../../../Home/Shared/MainBtn";

const Booking = ({ booking, setTreatment }) => {
  const { name, slots } = booking;
  return (
    <div>
      {slots.length === 0 ? (
        <div
          title="Please Don't Worry. Try Another Date."
          class="card text-neutral-content shadow-xl"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-secondary text-xl font-semibold">
              {name}
            </h2>
            <p className="uppercase text-sm font-light text-black">
              {slots.length > 0 ? (
                <span title="Available. Hit the Button for Booking Now.">
                  {slots[0]}
                </span>
              ) : (
                <span
                  title="Please Don't Worry. Try Another Date."
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
              {slots.length === 0 ? (
                <button disabled className="btn">
                  Book Appointment
                </button>
              ) : (
                <MainBtn>Make Appointment</MainBtn>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          title="Available. Hit the Button for Booking Now."
          class="card text-neutral-content shadow-xl"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-secondary text-xl font-semibold">
              {name}
            </h2>
            <p className="uppercase text-sm font-light text-black">
              {slots.length > 0 ? (
                <span title="Available. Hit the Button for Booking Now.">
                  {slots[0]}
                </span>
              ) : (
                <span
                  title="Please Don't Worry. Try Another Date."
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
              {slots.length === 0 ? (
                <button disabled className="btn">
                  Book Appointment
                </button>
              ) : (
                <label
                  for="booking-modal"
                  onClick={() => setTreatment(booking)}
                  class="btn btn-secondary text-white uppercase modal-button"
                >
                  Make Appointment
                </label>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
