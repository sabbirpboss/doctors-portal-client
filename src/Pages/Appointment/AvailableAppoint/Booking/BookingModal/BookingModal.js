import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const [user, loading, error] = useAuthState(auth);

  const handleBookingModal = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    // console.log(_id, name, slot);

    //to close the modal
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-black text-xl font-semibold mb-8">
            {name}
          </h3>
          <form
            onSubmit={handleBookingModal}
            className="grid grid-cols-1 gap-4 justify-items-center text-black"
          >
            <input
              type="text"
              value={format(date, "PP")}
              className="input input-bordered text-base focus:border-0 w-full max-w-xs bg-base-200"
              readOnly
              disabled
            />
            <select
              name="slot"
              className="select focus:border-0 w-full max-w-xs bg-base-200 text-black text-base"
            >
              {slots.map((slot, index) => (
                <option className="bg-accent text-white" key={index} value= {slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              className="input input-bordered focus:border-0 w-full max-w-xs"              
              disabled
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered focus:border-0 w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              value={user?.email || ""}
              className="input input-bordered focus:border-0 w-full max-w-xs"              
              disabled
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full max-w-xs uppercase font-normal text-base-300 text-base"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
