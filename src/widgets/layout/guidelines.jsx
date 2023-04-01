import PropTypes from "prop-types";
import { Button, Typography } from "@material-tailwind/react";

export function Guidelines({ heading, children }) {
  return (
    <div className="mx-auto w-full px-2 text-center lg:w-10/12 mb-0">
      <Typography variant="h3" color="white" className="mb-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-white leading-tight font-medium">
        {children}
      </Typography>
      <a href="https://developers.google.com/community-guidelines" target="_blank">
      <Button className=" from-white to-gray-200 shadow-md shadow-gray-300/20 hover:shadow-lg hover:shadow-grey-700/40 active:opacity-[0.85] mt-5 text-blue-800" variant="gradient" size="sm">
      Read Our Guidelines
    </Button>
      </a>
    </div>
  );
}

Guidelines.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Guidelines.displayName = "/src/widgets/layout/page-title.jsx";

export default Guidelines;
