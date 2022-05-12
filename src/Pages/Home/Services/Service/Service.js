import React from "react";

const Service = ({service, imgSWidth}) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={service.img}
          alt={service.name}
          class={`rounded-xl ${imgSWidth} mb-4`}
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
