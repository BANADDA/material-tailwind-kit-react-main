import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ heading, span1, span2, children }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h2" color="blue-gray text-4xl" className="mb-3">
        {heading}<span className="text-red-600 pl-0"> {span1}</span><span className="text-red-600 pl-3">{span2}</span>
      </Typography>
      <Typography variant="lead" className="text-blue-gray-600 text-lg">
        {children}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
