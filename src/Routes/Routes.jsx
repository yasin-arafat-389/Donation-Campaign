import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import CardDetails from "../Pages/CardDetails/CardDetails";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: (
          <PrivateRoute>
            <Donation />
          </PrivateRoute>
        ),
      },
      {
        path: "/statistics",
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
        loader: () => fetch("../Data.json"),
      },
      {
        path: "/details/:donationId",
        element: <CardDetails />,
        loader: () => fetch("../Data.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
