import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Sign Up</h3>

              {/* Name Input */}
              <div className="mt-4 space-y-2 py-1">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your Name"
                  className="w-80 px-3 border rounded-md outline-none"
                  required
                  {...register("name", { required: "Name is required" })}
                /> {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="mt-4 space-y-2 py-1">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 border rounded-md outline-none"
                  required
                  {...register("email", { required: "Email is required" })}
                />
                 {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
              </div>

              {/* Password Input */}
              <div className="mt-4 space-y-2 py-1">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your Password"
                  className="w-80 px-3 border rounded-md outline-none"
                  required
                  {...register("password", { required: "Password is required" })}
                />
                 {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
              </div>

              {/* Buttons */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Sign Up
                </button>
                <p className="text-md">
                  Already registered?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Login />
    </>
  );
}

export default Signup;
