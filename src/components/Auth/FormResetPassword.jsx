import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reqResetPassword } from "../../Api/reqAxios";

const FormResetPassword = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("reset_password_token");
  const [isValidToken, setIsValidToken] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  useEffect(() => {
    // if there is no token, redirect to login page
    if (!token) {
      toast.error("Not authorized");
      navigate("/login");
    }

    // check if token is valid
    const validateToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/validate-reset-password-token",
          { token },
        );
        if (response.data.valid) {
          setIsValidToken(true);
        }
      } catch (error) {
        toast.error(error.response.data.errMessage);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, [token, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isValidToken) {
    return <div>Invalid token</div>;
  }

  const onSubmit = async (formData) => {
    try {
      await reqResetPassword(formData, token);
      reset();
    } catch (error) {
      toast.error("Failed to reset password");
    }
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
    <main className="text-white flex flex-col flex-grow bg-gradient px-4">
      <h1 className="text-center text-2xl my-3 font-bold">
        Reset your password
      </h1>
      <h2 className="text-center text-lg m-3 text-[#ffffffc7] ">
        Enter your new password below
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          verifBeforeSubmit();
        }}
        className="flex flex-col p-12 rounded-2xl h-3/4 mx-4 md:w-2/4 md:mx-auto lg:w-1/4"
      >
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
        <button className="self-center border border-[#ffffff00] bg-[#ffffff3a]  py-1 mt-3 w-full rounded-full  hover:bg-black">
          Reset my password
        </button>
      </form>
    </main>
  );
};

export default FormResetPassword;
