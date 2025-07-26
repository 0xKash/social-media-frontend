import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

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
];

export default routes;
