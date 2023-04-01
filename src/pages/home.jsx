import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Button from "@mui/material/Button";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import Guidelines from "@/widgets/layout/guidelines";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 ml-0">
        <div className="absolute top-0 h-full w-full bg-[url('/img/GDSC.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-0 font-black"
              >
                <span className="text-blue-500">Google</span>{" "}
                <span className="text-red-500">Developer</span>{" "}
                <span className="text-yellow-500">Student</span>{" "}
                <span className="text-green-500">Clubs</span>
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-3 font-semibold"
              >
                UCU Chapter
              </Typography>
              <div className="flex justify-start">
                <Typography
                  variant="lead"
                  color="white"
                  className="hidden lg:leading-tight lg:opacity-80"
                >
                  Explore more than 1,900 college and university chapters across
                  more than 100 countries. Meet and learn with other budding
                  developers and build solutions for local businesses and
                  communities with Google technology.
                </Typography>
              </div>
              <div className="flex justify-center gap-2 pt-5">
                <Link to="/sign-up">
                  <Button
                    variant="contained"
                    endIcon={<DoubleArrowIcon />}
                    sx={{
                      backgroundColor: "red",
                      "&:hover": { backgroundColor: "darkred" },
                    }}
                  >
                    Join Club
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Showing more representation in tech with GDSC greatly increases
                our confidence, innovation, and performance. Especially in
                academic environments, having a sense of belonging and community
                for students can lead to success in tech together.
              </Typography>
              <a href="https://gdsc.community.dev/" target="_blank">
                <Button variant="outlined">See Other Chapters</Button>
              </a>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-800 px-4 pb-10 pt-10 text-center">
        <div className="container mx-auto mb-0 pb-0">
          <Guidelines heading="Our community guidelines">
            Google is dedicated to providing a harassment-free and inclusive
            event experience for everyone regardless of gender identity and
            expression, sexual orientation, disabilities, neurodiversity,
            physical appearance, size, ethnicity, nationality, race, age,
            religion, or other protected category.
          </Guidelines>
        </div>
      </section>
      
      <section className=" mx-2 px xl:mx-8 bg-white xl:px-6 pt-10 pb-10">
        <div className="container mx-auto ">
          <PageTitle heading="Team" span1="Leads" className></PageTitle>
          <div
            className="gap-x-18 grid-auto-rows m-0 p-0 xl:mt-10 grid grid-cols-1 items-center align-middle gap-6 md:grid-cols-2 xl:grid-cols-4"
            style={{ gridAutoRows: "1fr" }}
          >
            {teamData.map(({ img, name, position, affliation, skills, socials}) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                affliation={affliation}
                skills={skills}
                social={socials}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
