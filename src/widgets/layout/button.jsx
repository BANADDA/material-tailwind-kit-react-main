import React, { useState, useEffect } from 'react';
import { KeyboardArrowDown, LoginOutlined } from "@mui/icons-material";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "@/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Fragment } from "react";

export default function SimpleMenu() {
  // Firebase logout

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  //React js modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const logoutuser = () => {
    logout;
    handleOpen();
  }

  return (
    <Fragment>
      <Button
        variant="contained"
        endIcon={<LoginOutlined />}
        sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "red" } }}
        onClick={handleOpen}
        className="sm"
      >
        Logout
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className='text-red-500'>LogOut</DialogHeader>
        <DialogBody divider>
          <div className="font-extrabold text-black text-5xl m-2">Logged in as:</div>
         <span><span className=' font-bold text-lg'>Name: </span><span className='text-md text-base'>{name}</span></span> 
         <br />
          <span><span className=' font-bold text-lg'>Email: </span><span className='text-md text-base'>{user?.email}</span></span>
          Are you sure you want to log out?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={logoutuser}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
