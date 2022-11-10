import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My review");

  useEffect(() => {
    fetch(
      `https://assignment-server-drab.vercel.app/myreview?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403 || res.status === 404) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, logOut]);

  const handleRemoveItem = (id) => {
    const deleteConfirm = window.confirm(
      `Are you sure? You want to delete this item.`
    );
    if (deleteConfirm) {
      fetch(`https://assignment-server-drab.vercel.app/myreview/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Review deleted succesfully !!");
            const remaining = reviews.filter((or) => or._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div className="lg:px-20 md:px-6 px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        {reviews?.length > 0 ? (
          <h1 className="lg:text-4xl text-3xl font-bold text-center text-rose-500">
            Here my reviews !!
          </h1>
        ) : (
          <div className="flex justify-center items-center h-screen w-full">
            <h2 className="lg:text-4xl text-3xl font-bold text-center text-rose-500">
              No reviews were added !!
            </h2>
          </div>
        )}
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
