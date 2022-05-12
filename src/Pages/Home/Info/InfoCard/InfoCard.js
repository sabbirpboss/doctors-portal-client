import React from "react";

const InfoCard = ({ img, cardTitle, cardInfo, bgClass, iconName }) => {
  return (
    <div class={`card lg:card-side py-3 shadow-xl ${bgClass} text-white`}>
      <figure className="pl-5">
        <img style={{width:"86px", padding:"10px", margin:"0 auto"}} src={img} alt={iconName} />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardInfo}</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default InfoCard;
