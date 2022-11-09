import { createBrowserRouter } from "react-router-dom";
import AddReview from "../components/AddReview/AddReview";
import Review from "../components/AddReview/Review";
import AddService from "../components/AddService/AddService";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReview from "../components/MyReview/MyReview";
import UpdateMyReview from "../components/MyReview/UpdateMyReview";
import Resister from "../components/Resister/Resister";
import ServiceDetails from "../components/Services/ServiceDetails";
import Services from "../components/Services/Services";
import Main from "../Main/Main";
import PrivetRouter from "./PrivetRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      {
        path: "/addService",
        element: (
          <PrivetRouter>
            {" "}
            <AddService />
          </PrivetRouter>
        ),
      },
      {
        path: "/myReview",
        element: (
          <PrivetRouter>
            <MyReview />
          </PrivetRouter>
        ),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateMyReview />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myreview/${params?.id}`),
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/addReview/:id",
        element: (
          <PrivetRouter>
            <AddReview />
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/review",
        element: <Review />,
        loader: () => fetch(`http://localhost:5000/review`),
      },
      { path: "/blogs", element: <Blogs /> },
      { path: "/login", element: <Login /> },
      { path: "/resister", element: <Resister /> },
    ],
  },
]);
