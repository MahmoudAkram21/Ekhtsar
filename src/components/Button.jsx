import { Link } from "react-router-dom";

const Button = ({ children, onClick, to }) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      className="bg-mainColors-main  block flex-center w-3/4 h-[60px] text-3xl text-white font-bold rounded-2xl"
    >
      {children}
    </Link>
  );
};

export default Button;
