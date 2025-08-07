import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Post from "./pages/post";

const routes = [
  {
    path: "/home",
    element: <Home />,
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
];

export default routes;
