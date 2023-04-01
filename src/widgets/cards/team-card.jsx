import PropTypes from "prop-types";
import {
  Card,
  Avatar,
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import Leader from "./Leader";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import LayoutModalDialog from "./material-model";

const style = {
  position: 'absolute',
  outline:0,
  text: 'white',
  top: '50%',
  left: '50%',
  bgColor:'white',
  transform: 'translate(-50%, -50%)',
  height: 'auto',
  width: 'auto',
  p: 0,
};


export function TeamCard({ img, name, position, affliation, skills, socials}) {
  // const navigate = useNavigate();

  // function handleClick() {
  //   navigate('/profile', state = { name: 'John' } )
  // }
  return (
    <Card
      variant="gradient"
      color="transparent"
      shadow={true}
      className="relative mx-0 mb-5 flex w-full max-w-[18rem] flex-col shadow-lg transition duration-300 ease-in-out hover:scale-105"
    >
      {" "}
      <CardHeader floated={false} className="relative h-72 px-0">
        {" "}
        <Avatar
          src={img}
          alt={name}
          className="m-0 flex h-full w-full p-0 shadow-lg shadow-gray-800/25"
        />{" "}
      </CardHeader>{" "}
      <CardBody className="mb-0 text-center">
        {" "}
        <Typography variant="h5" color="blue-gray" className="mb-0">
          {" "}
          {name}{" "}
        </Typography>{" "}
        {position && (
          <Typography className="font-medium text-blue-gray-600">
            {" "}
            {position}{" "}
          </Typography>
        )}{" "}
      </CardBody>{" "}
      <CardFooter className="flex justify-center gap-7 py-0 pt-0 mb-5">
        {/* <Link 
        to={"/profile"}
        state={{img, name, position, affliation, skills, socials}}
        >
      <Button
          className="inline-block rounded bg-red-800 px-3 pt-2.5 pb-2 text-xm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-red-900 hover:shadow-red-800/20"
          // onClick={handleClick}
        >
          View Profile
        </Button>
        </Link> */}
        <LayoutModalDialog src={img} name={name} pos={position} aff={affliation} skills={skills}/>
      </CardFooter>
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
