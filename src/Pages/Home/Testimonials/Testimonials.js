import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review/Review";


const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people3,
    },
  ];
  return (
    <section className="my-28 bg-nature-light">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h4 className="text-xl text-secondary font-bold mb-1">Testimonial</h4>
          <h2 className="text-4xl font-normal">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-48 sm:24 h-40" src={quote} alt="Quote" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
              reviews.map(review => <Review key={review._id} review={review}></Review>)
          }
      </div>
    </section>
  );
};

export default Testimonials;
