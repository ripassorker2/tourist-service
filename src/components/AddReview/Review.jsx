import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviewData, setReviewData] = useState([]);

  const reviewService = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5000/review?reviewId=${reviewService?._id}`)
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, [reviewService?._id]);

  return (
    <div className="my-16">
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-rose-600 mt-6 text-center">
        What my client says
      </h1>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-11 italic gap-6">
        {reviewData?.map((review) => (
          <ReviewCard key={review?._id} reviewInfo={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
