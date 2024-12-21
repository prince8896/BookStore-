import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form data:", data); // Debug to check submitted data
    const userInfo = {
      email: data.email,
      password: data.password,
    };
   

    try {
      const res = await axios.post("http://127.0.0.1:4000/user/login", userInfo);
      console.log("Response data:", res.data);

      if (res.data) {
        toast.success("Login Successfully");
        localStorage.setItem("users", JSON.stringify(res.data.user));

        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err) {
      console.error("Error response:", err.response); // Debug error response
      toast.error(
        "Error: " +
          (err.response?.data?.message || "An unknown error occurred.")
      );
    }
  };

  return (
    <div>
      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email Input */}
            <div className="mt-4 space-y-2 py-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="mt-4 space-y-2 py-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/Signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
