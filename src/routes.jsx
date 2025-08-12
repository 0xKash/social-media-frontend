import Login from "@/pages/login";
import Register from "@/pages/register";
import Home from "@/pages/home";
import Post from "@/pages/post";
import Profile from "@/pages/profile";
import Settings from "@/pages/settings";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/:username",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/post/:postId",
    element: <Post />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
];

export default routes;
