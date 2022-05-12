import React from "react";

const InfoCard = ({ img, cardTitle, cardInfo, bgClass, iconName }) => {
  return (
    <div className={`card lg:card-side py-3 shadow-xl ${bgClass} text-white`}>
      <figure>
        <img style={{width:"86px", padding:"10px", margin:"0 auto"}} src={img} alt={iconName} />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardInfo}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default InfoCard;
