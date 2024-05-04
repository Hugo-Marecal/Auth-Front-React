import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const FormLogin = () => {
  const { register, handleSubmit, trigger } = useForm();

  const onSubmit = async (formData) => {
    await axios
      .post("http://localhost:8080/api/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success(response.data.successMessage);
      })
      .catch((error) => {
        toast.error(error.response.data.errMessage);
      });
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

  return (
    <main className="text-white flex flex-col flex-grow bg-gradient px-4">
      <h1 className="text-center text-2xl my-3 font-bold">Login Account</h1>
      <h2 className="text-center text-lg my-3 ">Hi, welcome back!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          verifBeforeSubmit();
        }}
        className="flex flex-col p-12 rounded-2xl h-3/4 mx-4"
      >
        <label className="mb-2" htmlFor="email">
          E-mail
        </label>
        <input
          className="mb-6 pl-2 h-8 text-white bg-[#ffffff3a] rounded-lg placeholder:text-white focus:outline-none focus:ring-1 focus:ring-white"
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
          className="mb-6 pl-2 h-8 text-white bg-[#ffffff3a] rounded-lg placeholder:text-white focus:outline-none focus:ring-1 focus:ring-white"
          type="password"
          name="password"
          id="password"
          placeholder="******"
          {...register("password", { required: true })}
        />
        <button className="self-center border border-[#ffffff00] bg-[#ffffff3a] py-1 mt-3 w-3/4 rounded-full  hover:bg-black">
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
