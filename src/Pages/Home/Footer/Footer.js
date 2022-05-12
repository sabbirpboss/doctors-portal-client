import React from "react";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer}`,
        backgroundSize: "cover",
      }}
      className="p-10 mx-[-48px]"
    >
      <div className="footer text-base text-accent flex justify-between">
        <div>
          <span className="footer-title uppercase text-lg">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title uppercase text-lg">Oral Health</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title uppercase text-lg">Our Address</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="font-light text-base">Copyright © 2022 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
