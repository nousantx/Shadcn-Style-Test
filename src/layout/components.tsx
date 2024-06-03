import { Outlet } from "react-router-dom";
import { useStyler } from "../styles/styler";

const Root = () => {
  useStyler();
  return (
    <>
      <Outlet />
    </>
  );
};

export default Root;
