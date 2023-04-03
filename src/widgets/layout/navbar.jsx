import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { KeyboardArrowDown } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { UsersIcon } from "@heroicons/react/24/solid";
import SimpleMenu from "./button";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";

export function Navbar({ logo, brandName, b1, b2, b3, b4, b5, b6, routes, action }) {
  const [navbarUserIsLogged, setnavbarUserIsLogged] = useState(false);
  const [openNav, setOpenNav] = React.useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setnavbarUserIsLogged(true);
      } else {
        setnavbarUserIsLogged(false);
      }
    });

    return () => unsubscribe();
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const user = auth.currentUser;
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => {
        // Only render the pages that are not restricted to members
        // Only render the pages that are not restricted to members
        if (
          !navbarUserIsLogged &&
          (name === "profile" ||
            name === "Application" ||
            name === "Users" ||
            name === "Log Out")
        ) {
          return null;
        }
        if (navbarUserIsLogged && (name === "Sign In" || name === "Sign Up")) {
          return null;
        }
        return (
          <Typography
            key={name}
            as="li"
            variant="small"
            color="inherit"
            className="capitalize"
          >
            {href ? (
              <a
                href={href}
                target={target}
                className="flex items-center gap-1 p-1 font-normal"
              >
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </a>
            ) : (
              <Link
                to={path}
                target={target}
                className="flex items-center gap-1 p-1 font-normal"
              >
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </Link>
            )}
          </Typography>
        );
      })}
    </ul>
  );

  return (
    <MTNavbar className="p-3 pb-4 lg:pt-0 lg:pb-5 bg-gray-850 border-0 h-16">
      <div className=" bottom-5 container mx-auto flex items-center align-middle justify-evenly text-black text-6xl">
        <Link to="/">
          <Typography className="ml-2 mr-4 cursor-pointer text-xl font-bold ">
            <span className="text-blue-500">{b1}</span>
            <span className="text-red-500">{b2}</span>
            <span className="text-yellow-500">{b3}</span>
            <span className="text-blue-500">{b4}</span>
            <span className="text-green-500">{b5}</span>
            <span className="text-red-500">{b6}</span> {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block lg:text-xl lg:font-bold">{navList}</div>
        <div className="hidden gap-2 lg:hidden">
          {React.cloneElement(action, {
            className: "hidden lg:inline-block lg:hidden",
          })}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pb-4 pt-2 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          <a href="" target="_blank" className="mb-2 block"></a>
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  logo: (
    <img
        className="w-[33px] h-[35px] p-0"
        src='/img/logo.jpg'>
    </img> 
  ),
  brandName: "Developers",
  b1: "G",
  b2: "o",
  b3: "o",
  b4: "g",
  b5: "l",
  b6: "e",
  action: <SimpleMenu />,
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
