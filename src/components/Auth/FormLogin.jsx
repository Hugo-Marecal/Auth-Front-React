import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { reqLogin } from "../../Api/reqAxios";
import { useAuth } from "../../context/AuthContext";

const FormLogin = () => {
  const { register, handleSubmit, trigger, reset } = useForm();
  const { setIsLoggedIn } = useAuth();
  const location = useLocation();

  const onSubmit = async (formData) => {
    try {
      const isLoginSuccessful = await reqLogin(formData);
      if (isLoginSuccessful) {
        setIsLoggedIn(true);
        reset();
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };

  const verifBeforeSubmit = () => {
    trigger().then((isValid) => {
      if (!isValid) {
        toast.error("Please complete all fields!");
      } else {
        handleSubmit(onSubmit)();
      }
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const successMessage = params.get("successMessage");

    if (successMessage) {
      toast.success(successMessage);
    }
  }, [location]);

  return (
    <main className="text-white flex flex-col flex-grow bg-gradient px-4">
      <h1 className="text-center text-2xl my-3 font-bold">Login Account</h1>
      <h2 className="text-center text-lg my-3 ">Hi, welcome back!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          verifBeforeSubmit();
        }}
        className="flex flex-col p-12 rounded-2xl h-3/4 mx-4 md:w-2/4 md:mx-auto lg:w-1/4"
      >
        <label className="mb-2" htmlFor="email">
          E-mail
        </label>
        <input
          className="mb-6 pl-2 h-8 text-white bg-[#ffffff3a] rounded-lg placeholder:text-[#ffffff80] focus:outline-none focus:ring-1 focus:ring-white"
          type="email"
          name="email"
          id="email"
          placeholder="@"
          {...register("email", { required: true })}
        />
        <label className=" mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="mb-3 pl-2 h-8 text-white bg-[#ffffff3a] placeholder:text-[#ffffff80] rounded-lg focus:outline-none focus:ring-1 focus:ring-white"
          type="password"
          name="password"
          id="password"
          placeholder="******"
          {...register("password", { required: true })}
        />
        <Link
          to="/forgot-password"
          className="text-xs text-center text-[#ffffff5c] mb-3 underline hover:text-white"
        >
          Forgot your password ?
        </Link>
        <button className="self-center border border-[#ffffff00] bg-[#ffffff3a]  py-1 mt-3 w-3/4 rounded-full  hover:bg-black">
          Login
        </button>
        <p className="text-center text-sm mt-4">
          Don&apos;t have an account yet ?{" "}
          <Link className="font-black text-white underline " to="/register">
            Sign up
          </Link>
        </p>
      </form>
    </main>
  );
};

export default FormLogin;
