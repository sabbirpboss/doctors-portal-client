import React from "react";

const Service = ({service, imgSWidth}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={service.img}
          alt={service.name}
          className={`rounded-xl ${imgSWidth} mb-4`}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
