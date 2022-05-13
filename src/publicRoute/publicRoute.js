import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment";

export const publicRoute = [
  {
    path: "/",
    name: "Home",
    Component:  Home ,
  },
  {
    path: "/appointment",
    name: "Appointment",
    Component: Appointment ,
  },
  {
    path: "/about",
    name: "About",
    Component: About,
  },
  {
    path: "/login",
    name: "Login",
    Component: Login,
  },
];
