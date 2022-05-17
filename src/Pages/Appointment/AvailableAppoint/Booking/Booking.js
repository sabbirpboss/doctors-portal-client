import React from "react";
import MainBtn from "../../../Home/Shared/MainBtn";

const Booking = ({ booking, setTreatment }) => {
  const { name, slots } = booking;
  return (
    <div>
      {slots.length === 0 ? (
        <div
          title="Please Don't Worry. Try Another Date."
          className="card text-neutral-content shadow-xl"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary text-xl font-semibold">
              {name}
            </h2>
            <p className="uppercase text-sm font-normal text-black">
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
            <p className="uppercase text-black text-xs font-normal">
              {slots.length < 10 ? 0 : 0}
              {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
            </p>
            <div className="card-actions justify-end">
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
          className="card text-neutral-content shadow-xl"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary text-xl font-semibold">
              {name}
            </h2>
            <p className="uppercase text-sm font-normal text-black">
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
            <p className="uppercase text-black text-xs font-normal">
              {slots.length < 10 ? 0 : 0}
              {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
            </p>
            <div className="card-actions justify-end">
              {slots.length === 0 ? (
                <button disabled className="btn">
                  Book Appointment
                </button>
              ) : (
                <label
                  htmlFor="booking-modal"
                  onClick={() => setTreatment(booking)}
                  className="btn btn-secondary text-white uppercase modal-button"
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
