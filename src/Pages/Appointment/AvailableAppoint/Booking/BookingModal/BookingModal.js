import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBookingModal = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    // console.log(_id, name, slot);
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-black text-xl font-semibold mb-8">
            {name}
          </h3>
          <form
            onSubmit={handleBookingModal}
            className="grid grid-cols-1 gap-4 justify-items-center text-black"
          >
            <input
              type="text"
              value={format(date, "PP")}
              class="input input-bordered text-base focus:border-0 w-full max-w-xs bg-base-200"
              readOnly
              disabled
            />
            <select
              name="slot"
              class="select focus:border-0 w-full max-w-xs bg-base-200 text-black text-base"
            >
              {slots.map((slot) => (
                <option className="bg-accent text-white" value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="input input-bordered focus:border-0 w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered focus:border-0 w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              class="input input-bordered focus:border-0 w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-accent w-full max-w-xs uppercase font-light text-base-300 text-base"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
