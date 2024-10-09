import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCommentDots,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faHouse, faTags } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const links = [
    {
      path: "",
      icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
      path: "chat",
      icon: <FontAwesomeIcon icon={faCommentDots} />,
    },
    {
      path: "account",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      path: "calendar",
      icon: <FontAwesomeIcon icon={faCalendarDays} />,
    },
    {
      path: "discound",
      icon: <FontAwesomeIcon icon={faTags} />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0  w-full rounded-t-xl main-shadow py-5">
      <ul className="flex w-full gap-2 justify-around items-center text-3xl ">
        {links.map((link) => (
          <li>
            <NavLink
              end
              className={({ isActive }) => isActive && "footer-active"}
              to={link.path}
            >
              {link.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
