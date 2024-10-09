import { Outlet } from "react-router-dom";
import mainBg from "../assets/image/mainBg.png";
const Root = () => {
  return (
    <>
      <div className="main" style={{ backgroundImage: `url(${mainBg}) ` }}>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
