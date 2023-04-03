import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Logout, SettingsApplicationsOutlined } from "@mui/icons-material";
import UserList from "./display-users";
import UserPage from "./display-users";
import Application from "./pages/application";
import Dashboard from "./pages/dashbord";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    icon: SettingsApplicationsOutlined,
    name: "Application",
    path: "/application",
    element: <Application />,
  },
  {
    icon: UserGroupIcon,
    name: "Users",
    path: "/users",
    element: <UserList />,
  },
  {
    icon: DocumentTextIcon,
    name: "About",
    href: "https://developers.google.com/community/dsc/",
    element: "",
  },
  {
    icon: Logout,
    name: "Log Out",
    path: "/log-out",
    element: <Dashboard />,
  },
];

export default routes;
