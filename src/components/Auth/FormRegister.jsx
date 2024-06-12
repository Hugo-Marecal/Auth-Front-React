import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { reqRegister } from "../../Api/reqAxios";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    getValues,
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (formData) => {
    await reqRegister(formData);
    reset();
  };

  const verifBeforeSubmit = () => {
    // Déclenche la validation de tous les champs
    trigger().then((isValid) => {
      if (errors.password) {
        toast.error(errors.password.message);
      } else if (getValues("password") !== getValues("confirmPassword")) {
        toast.error("Password does not match");
      } else if (!isValid) {
        toast.error("Please complete all fields!");
      } else {
        handleSubmit(onSubmit)();
      }
    });
  };

  return (
    <main className="text-white flex flex-col flex-grow  bg-gradient px-4 ">
      <h1 className="text-center text-2xl my-3 font-bold">Create Account</h1>
      <h2 className="text-center text-lg my-3 ">Sign up to get started!</h2>
      <form
        className="flex flex-col p-12 rounded-2xl h-3/4 mx-4 md:w-2/4 md:mx-auto lg:w-1/4"
        onSubmit={(e) => {
          e.preventDefault();
          verifBeforeSubmit();
        }}
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

        <label className="mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="mb-6 pl-2 h-8 text-white bg-[#ffffff3a] rounded-lg placeholder:text-[#ffffff80] focus:outline-none focus:ring-1 focus:ring-white"
          type="text"
          name="username"
          id="username"
          placeholder="John"
          {...register("username", { required: true })}
        />
        <label className="mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="mb-6 pl-2 h-8 text-white bg-[#ffffff3a] rounded-lg placeholder:text-[#ffffff80] placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-white"
          type="password"
          name="password"
          id="password"
          placeholder="********"
          {...register("password", {
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must include uppercase, lowercase, digit, special character, and be at least 8 characters long.",
            },
          })}
        />
        <label className="mb-2" htmlFor="confirmPassword">
          Confirm your password
        </label>
        <input
          className="mb-6 pl-2 h-8 text-white bg-[#ffffff3a] rounded-lg placeholder:text-[#ffffff80] placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-white"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="********"
          {...register("confirmPassword", { required: true })}
        />
        <button
          type="submit"
          className="self-center border border-[#ffffff00] bg-[#ffffff3a] py-1 mt-3 w-3/4 rounded-full  hover:bg-black"
        >
          Sign up
        </button>
      </form>
    </main>
  );
};

export default FormRegister;
