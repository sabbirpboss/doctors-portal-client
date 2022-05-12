import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review.review}</p>
        <div className="flex items-center py-6">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt={review.name} />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">{review.name}</h4>
            <p className="text-base text-light">{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
