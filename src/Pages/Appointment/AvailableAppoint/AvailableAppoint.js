import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Booking from "./Booking/Booking";
import BookingModal from "./Booking/BookingModal/BookingModal";

const AvailableAppoint = ({ date }) => {
  const [bookings, setBookings] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="my-20">
      <h5 className="text-center text-secondary text-xl text-light my-12">
        Available Appointments on {format(date, "PP")}
      </h5>
      <div className="grid frid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookings.map((booking) => (
          <Booking 
          key={booking._id} 
          booking={booking}
          setTreatment={setTreatment}
          ></Booking>
        ))}
      </div>
      {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppoint;
