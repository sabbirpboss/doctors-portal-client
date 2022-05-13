import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Booking from "./Booking/Booking";

const AvailableAppoint = ({ date }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("bookings.json")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div>
      <h5 className="text-center text-secondary text-xl text-light my-12">
        Available Appointments on {format(date, "PP")}
      </h5>
        <div className="grid frid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              bookings.map(booking => <Booking key={booking._id} booking={booking}></Booking>)
            }
        </div>
    </div>
  );
};

export default AvailableAppoint;
