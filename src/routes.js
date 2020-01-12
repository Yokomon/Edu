import Homepage from "views/Homepage.js"
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "User",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/Learnian",
    name: "Homepage",
    rtlName: "Home",
    component: Homepage
  }
];
export default routes;
