import {  Outlet } from "react-router-dom";
import NavTopBar from "./appBar.component";

const NavTopBarContainer = () => {
  return (
    <>
      <NavTopBar />
      <Outlet />
    </>
  );
};

export default NavTopBarContainer;
