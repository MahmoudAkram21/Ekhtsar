import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";

const AppRoot = () => {
  return (
    <div>
      <NavMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppRoot;
