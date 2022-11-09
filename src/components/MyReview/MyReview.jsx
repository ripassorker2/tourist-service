import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myreview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleRemoveItem = (id) => {
    const deleteConfirm = window.confirm(
      `Are you sure? You want to delete this item.`
    );
    if (deleteConfirm) {
      fetch(`http://localhost:5000/myreview/${id}`, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Item deleted succesfully !!");
            const remaining = reviews.filter((or) => or._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div className="lg:px-20 md:px-6 px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800">
          Here my reviews !!
        </h1>
      </div>
      <div className="w-full grid md:grid-cols-2 items-center gap-6 mt-10">
        {reviews?.map((review) => (
          <MyReviewCard
            key={review._id}
            handleRemoveItem={handleRemoveItem}
            review={review}
          ></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
