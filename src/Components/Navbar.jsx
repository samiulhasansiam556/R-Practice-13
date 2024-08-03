import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log("An error happened during sign out:", error);
    }
  };

  return (
    <div className="main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2a056f] py-4 shadow-md">
      <div className="left">
        <div className="logo font-bold text-2xl text-white text-center">
          E-NoteBook
        </div>
      </div>
      <div className="right">
        <ul className="flex space-x-4 text-white justify-center items-center">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
       {user && <li onClick={logout} className="cursor-pointer">Logout</li>}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
