import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Footer } from "./widgets/layout";
import LinearWithValueLabel from "./widgets/layout/progress";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeZGQSuwdhdSYoQlO2lBXj6JubvNp-t1c",
  authDomain: "data-science-ddebd.firebaseapp.com",
  projectId: "data-science-ddebd",
  storageBucket: "data-science-ddebd.appspot.com",
  messagingSenderId: "516618929749",
  appId: "1:516618929749:web:3d346e6f6bcf89df8936dc",
  measurementId: "G-YXCFBR7STJ",
};

const app = initializeApp(firebaseConfig);

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      setError(null);
      const user = getAuth(app).currentUser;

      if (!user) {
        console.log("user not signed in");
        setLoading(false);
        return;
      }

      try {
        const db = getFirestore(app);
        const usersRef = collection(db, "users");
        const usersSnapshot = await getDocs(usersRef);
        const usersList = [];
        usersSnapshot.forEach((doc) => {
          const userData = doc.data();
          usersList.push({
            id: doc.id,
            name: userData.name,
            email: userData.email,
          });
        });
        setUsers(usersList);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    getUsers();
  }, []);

  if (loading) {
    return (
      <>
        <section className="relative ml-0 flex h-screen content-center items-center justify-center pb-5 pt-16 text-center">
          <div className="absolute top-0 h-full w-full bg-[url('/img/GDSC.png')] bg-cover bg-center" />
          {/* <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" /> */}
          <div className="max-w-8xl container relative mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <LinearWithValueLabel/>
            </div>
          </div>
        </section>
        <div className="bg-blue-gray-50/50">
          <Footer />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <section className="relative ml-0 flex h-screen content-center items-center justify-center pb-5 pt-16 text-center">
          <div className="absolute top-0 h-full w-full bg-[url('/img/GDSC.png')] bg-cover bg-center" />
          <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
          <div className="max-w-8xl container relative mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  This is an error alert — <strong>{error}</strong>
                </Alert>
            </div>
          </div>
        </section>
        <div className="bg-blue-gray-50/50">
          <Footer />
        </div>
      </>
    );
  }

  if (users.length === 0) {
    return (
        <>
          <section className="relative ml-0 flex h-screen content-center items-center justify-center pb-5 pt-16 text-center">
            <div className="absolute top-0 h-full w-full bg-[url('/img/GDSC.png')] bg-cover bg-center" />
            <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
            <div className="max-w-8xl container relative mx-auto">
                <div className="flex items-center justify-center space-x-2">
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    No Users found
                  </Alert>
              </div>
            </div>
          </section>
          <div className="bg-blue-gray-50/50">
            <Footer />
          </div>
        </>
      );
  }

  return (
    <>
      <section className="relative ml-0 flex h-auto content-center items-center justify-center pb-5 pt-16 text-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/GDSC.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="my-28 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="rounded-lg border bg-white p-4 text-left"
                >
                  <p className="font-bold">User Id:</p>
                  <p>{user.id}</p>
                  <p className="font-bold">Name:</p>
                  <p>{user.name}</p>
                  <p className="font-bold">Email:</p>
                  <p>{user.email}</p>
                  <div className="mt-4 flex justify-end">
                    <a className="text-green-500 hover:text-green-700" href="#">
                      Edit
                    </a>
                    <span className="mx-2">|</span>
                    <a className="text-red-500 hover:text-red-700" href="#">
                      Delete
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default UserList;
