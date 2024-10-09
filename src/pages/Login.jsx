import { useState } from "react";
import image1 from "../assets/image/landImage1.png";
import image2 from "../assets/image/landingImage2.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import LoginForm from "../components/LoginForm";

const images = [image1, image2];
const Login = () => {
  const [image, setImage] = useState(0);

  function handelClick() {
    console.log("hello");
    setImage((prev) => prev + 1);
  }

  return (
    <>
      <div className="min-h-[100vh]">
        {image === 2 && <LoginForm />}
        {image < 2 && (
          <>
            <div className="flex flex-col  items-center gap-8 py-24">
              <div className=" w-3/4">
                <img src={images[image]} alt="login1" className="max-w-full" />
              </div>

              <p className="px-5 text-xl">
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                ليتصور طريقه وضع النصوص بالتصاميم سواء ...
              </p>
              <Button onClick={handelClick}>التالي</Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
