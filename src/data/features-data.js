import {
  StarIcon,
  ArrowPathIcon,
  FingerPrintIcon,
  LinkIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import { Lightbulb, SchoolOutlined } from "@mui/icons-material";

export const featuresData = [
  {
    color: "blue",
    title: "Connect",
    icon: LinkIcon,
    description:
      "Meet students interested in developer technologies at your college or university. All are welcome, including those with diverse backgrounds and different majors.",
  },
  {
    color: "red",
    title: "Learn",
    icon: SchoolOutlined,
    description:
      "Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities online and in-person.",
  },
  {
    color: "teal",
    title: "Grow",
    icon: Lightbulb,
    description:
      "Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn.",
  },
];

export default featuresData;
