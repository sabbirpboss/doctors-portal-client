import React from "react";

const InfoCard = ({ img, cardTitle, cardInfo, bgClass }) => {
  return (
    <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
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
