import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { reqForgotPassword } from "../../Api/reqAxios";

const FormForgotPassword = () => {
  const { register, handleSubmit, trigger, reset } = useForm();

  const onSubmit = async (formData) => {
    try {
      await reqForgotPassword(formData);
      reset();
    } catch (error) {
      toast.error("Failed to send email");
    }
  };

  const verifBeforeSubmit = () => {
    trigger().then((isValid) => {
      if (!isValid) {
        toast.error("Please enter valid email!");
      } else {
        handleSubmit(onSubmit)();
      }
    });
  };

  return (
    <main className="text-white flex flex-col flex-grow bg-gradient px-4">
      <h1 className="text-center text-2xl my-3 font-bold">
        Forgot your password ?
      </h1>
      <h2 className="text-center text-lg m-3 text-[#ffffffc7] ">
        Enter your email below to receive a special link to reset your password
      </h2>
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
        <button className="self-center border border-[#ffffff00] bg-[#ffffff3a]  py-1 mt-3 w-full rounded-full  hover:bg-black">
          Reset my password
        </button>
      </form>
    </main>
  );
};

export default FormForgotPassword;
