import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-2" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-3 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-3 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "GDSC UCU Chapter",
  description:
    "Join us today to network with experts and boost your skills in programming.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/Google-Developers-967415219957038",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://twitter.com/googledevs",
    },
    {
      color: "purple",
      name: "instagram",
      path: "https://www.instagram.com/googledevs",
    },
    {
      color: "red",
      name: "youtube",
      path: "https://www.youtube.com/hashtag/developerstudentclubs",
    },
    {
      color: "blue",
      name: "linkedin",
      path: "https://www.linkedin.com/company/googledevelopers",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "Google Developer Groups", path: "https://developers.google.com/community/gdg" },
        { name: "Blog", path: "https://googledevelopers.blogspot.com/" },
        {
          name: "Google Developer Experts",
          path: "https://developers.google.com/community/experts",
        },
        {
          name: "Goggle Developer Student Clubs",
          path: "https://developers.google.com/community/gdsc",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: "Google API Console",
          path: "https://console.developers.google.com/",
        },
        {
          name: "Google Cloud Platform Console",
          path: "https://console.cloud.google.com/",
        },
        {
          name: "Google Play Console",
          path: "https://play.google.com/apps/publish",
        },
        {
          name: "Firebase Console",
          path: "https://console.firebase.google.com/",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} GDSC UCU Chapter by{" "}
      <a
        href=""
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        GDSC UCU
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
