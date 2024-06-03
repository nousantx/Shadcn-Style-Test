import { Outlet } from "react-router-dom";
import { useStyler } from "../styles/styler";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Root = () => {
  useStyler();
  return (
    <>
      <Navbar />
      <main className="w-mx-1440px h-mn-100vh mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
