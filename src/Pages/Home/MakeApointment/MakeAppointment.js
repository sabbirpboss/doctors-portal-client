import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";
import MainBtn from "../Shared/MainBtn";

const MakeAppointment = () => {
  const doctorInfo = {
    doctorName: "Dr. Sirazul Islam",
  };
  return (
      <section
        style={{
          background: `url(${appointment})`,
        }}
        className="flex justify-center items-center mx-[-48px]"
      >
        <div className="flex-1 hidden lg:block">
          <img
            className="mt-[-100px]"
            src={doctor}
            alt={doctorInfo.doctorName}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-secondary font-bold">Appointment</h3>
          <h2 className="font-semibold text-4xl text-white py-5">
            Make an appointment Today
          </h2>
          <p className="text-base text-white pb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <MainBtn>Get Started</MainBtn>
        </div>
      </section>
  );
};

export default MakeAppointment;
