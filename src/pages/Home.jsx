import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import charachter from "../assets/charachterImages/Ellipse.png";
import handWaving from "../assets/icon/waving-hand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import filterIcon from "../assets//icon/Iconly.png";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = ["قاعات", "خبراء تجميل", "مصورين"];

  return (
    <div className="mt-2">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[100px] p-1 border-2 border-gray-900 rounded-full my-4">
          <img src={charachter} alt="" className="max-w-full" />
        </div>
        <h1 className="text-2xl flex gap-3 py-2">
          <img src={handWaving} alt="" className="w-5" />
          <span> مرحبا بك مجددا</span>
        </h1>
      </div>
      <div className="mx-4  border-mainColors-Beige border  rounded-3xl overflow-hidden flex gap-1 items-center p-1">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-mainColors-Beige text-2xl"
        />
        <input
          className="p-3 w-full outline-none grow"
          type="text"
          placeholder="Search"
        />
        <img src={filterIcon} alt="" className="w-5" />
      </div>

      <Slider className={`h-24`} ispagination={false} isNavigation={false}>
        {categories.map((ele) => (
          <Slider.item>
            <Link
              to="/home"
              className="h-[40px] bg-mainColors-LightBeige flex-center rounded-[10px] text-xl"
            >
              {ele}
            </Link>
          </Slider.item>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
