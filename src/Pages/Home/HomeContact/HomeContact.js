import React from "react";
import appointment from "../../../assets/images/appointment.png";

const HomeContact = () => {
  return (
    <section>
      <div
        style={{
          background: `url(${appointment})`,
        }}
        className="py-14 mx-[-48px]"
      >
        <div className="text-center">
          <h4 className="text-secondary text-xl font-bold">Contact Us</h4>
          <h2 className="text-3xl text-white font-light mb-8 mt-1">
            Stay connected with us
          </h2>
        </div>
        <div className="">
          <input
            className="block sm:w-5/6 lg:w-[450px] xl:w-[450px] 2xl:w-[450px] h-12 p-3 mx-auto input text-base"
            type="email"
            placeholder="Email Address"
            name="email"
          />
          <input
            className="block sm:w-5/6 lg:w-[450px] xl:w-[450px] 2xl:w-[450px] h-12 p-3 mx-auto my-4 input text-base"
            type="text"
            placeholder="Subject"
            name="text"
          />
          <textarea
            className="block w-[275px] sm:w-3/4 md:w-5/6 lg:w-[450px] xl:w-[450px] 2xl:w-[450px] p-3 mx-auto textarea text-base"
            name="message"
            id=""
            cols="25"
            rows="4"
            placeholder="Your message"
          ></textarea>
          <div className="text-center mt-6">
            <input
              className="btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary px-9"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </div>

      {/* another coding system for this section */}
      {/* <div
        style={{
          background: `url(${appointment})`,
        }}
        className="bg-primary px-10 py-14 mx-[-48px] my-5"
      >
        <div className="text-center pb-14 text-white">
          <p className="text-xl font-bold text-secondary">Contact Us</p>
          <h1 className="text-3xl font-light">Stay connected with us</h1>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-5">
          <input
            type="text"
            placeholder="Email Address"
            className="input w-full max-w-md"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-md"
          />
          <textarea
            className="textarea w-full max-w-md"
            placeholder="Your message"
            rows={6}
          ></textarea>
          <div className="text-center mt-6">
            <input
              className="btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary px-9"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HomeContact;
