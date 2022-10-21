import Link from "next/link";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import styles from "./Navbar.module.css";
import "../flow/config";

const Navbar = () => {
  const { currentUser, logIn, logOut } = useAuth();
  return (
    <div className={styles.navbar}>
      <Link href='/'>Home</Link>
      <Link href='/purchase'>Purchase</Link>
      <Link href='/manage'>Manage</Link>
      <button onClick={currentUser.addr ? logOut : logIn}>
        {currentUser.addr ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default Navbar;
