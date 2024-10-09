import { Link } from "react-router-dom";
import Button from "./Button";

const LoginForm = () => {
  return (
    <div className="h-full justify-center items-center flex flex-col gap-8 py-36">
      <h1 className={`text-5xl`}>تسجيل الدخول</h1>
      <form className="flex flex-col w-full gap-7 px-7">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          className="bg-mainColors-subColor p-3"
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          className="bg-mainColors-subColor p-3"
        />
        <button className="bg-mainColors-main block flex-center w-3/4 h-[60px] text-3xl text-white font-bold rounded-2xl mx-auto">
          تسجيل الدخول
        </button>
        <span className="text-center">
          لا تمتلك حساب ؟{" "}
          <Link to="/register" className="text-mainColors-main font-bold">
            قم بإنشاء حساب
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
