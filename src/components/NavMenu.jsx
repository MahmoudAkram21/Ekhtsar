import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="flex justify-between align-middle pt-16 px-5 sticky top-0 left-0">
      <div className="bg-white rounded-full flex-center w-[40px] h-[40px] shadow-lg">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="flex gap-3 text-xl ">
        <Link>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faBell} />
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
