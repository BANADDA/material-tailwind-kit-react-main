import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "@/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Button } from "@mui/material";
import { Close, Logout } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
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
      toast.error(`An error occured: ${err}`);
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => navigate("/");

  return (
    <>
      <section className="relative ml-0 flex h-screen content-center items-center justify-center pb-5 pt-16 text-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/GDSC.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap justify-center">
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              <div className="align-middle">
                <div className="text-base">
                 <span className="font-bold">{name}</span>  are you sure you want to log out?
                </div>
                <Stack direction="row" spacing={10} className="mt-3">
                  <Button startIcon={<Close/>} variant="contained" color="success" onClick={handleOpen}>
                    Cancle
                  </Button>
                  <Button
                    variant="contained"
                    onClick={logout}
                    color="warning"
                    endIcon={<Logout />}
                  >
                    Log out
                  </Button>
                </Stack>
              </div>
            </Alert>
          </div>
        </div>
      </section>
    </>
  );
}
export default Dashboard;
