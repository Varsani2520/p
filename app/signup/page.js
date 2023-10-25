"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { signupService } from "../service/signup/signUpService";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    Name: "",
    Email: "",
    phone: "",
    password: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !signUpData.Name ||
      !signUpData.Email ||
      !signUpData.phone ||
      !signUpData.password
    ) {
      toast.error("Please fill in all the fields.");
      return;
    }
    try {
      console.log("page try");
      const result = await signupService(signUpData);
      console.log("page try1");
      console.log(result);
      toast.success("user register  successfully!");
    } catch (error) {
      toast.error("error in sign up");
      console.log(error);
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full space-y-8 p-4">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Sign Up
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, Name: e.target.value })
                  }
                  value={signUpData.Name}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, Email: e.target.value })
                  }
                  value={signUpData.Email}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone number"
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, phone: e.target.value })
                  }
                  value={signUpData.phone}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="••••••••"
                  onChange={(e) =>
                    setSignUpData({
                      ...signUpData,
                      password: e.target.value,
                    })
                  }
                  value={signUpData.password}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
