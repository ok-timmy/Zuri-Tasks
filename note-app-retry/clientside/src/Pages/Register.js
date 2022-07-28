import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import { axiosInstance } from "../config";

function Register() {
  const [details, setDetails] = useState({});
  const [nameerror, setNameerror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);
  const [emailerror, setEmailerror] = useState(false);

  function handleChange(evt) {
    const value = evt.target.value;
    setDetails({
      ...details,
      [evt.target.name]: value,
    });
  }

  function checkPassword() {
    const pass = document.getElementById("password").value;
    const passConfirm = document.getElementById("password2").value;

    if (pass === passConfirm) {
      document.getElementById("message").classList.remove("text-red-400");
      document.getElementById("message").classList.add("text-green-400");
      document.getElementById("message").innerText = "Password Matched!!";
    } else {
      document.getElementById("message").innerText =
        "Password Does Not Match!!";
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    !details.hasOwnProperty("name") && setNameerror(true);
    !details.hasOwnProperty("password") && setPassworderror(true);
    !details.hasOwnProperty("email") && setEmailerror(true);

    try {
      console.log(details);
      const user = await axiosInstance.post(
        "/auth/register",
        details
      );
      user.data && window.location.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mb-4 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Register Now</h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="Name">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  required="required"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                {nameerror ? (
                  <span className="text-xs text-red-400">
                    Field Cannot be Empty!
                  </span>
                ) : null}
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  required="required"
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                {emailerror ? (
                  <span className="text-xs text-red-400">
                    Field Cannot be Empty!
                  </span>
                ) : null}
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  required="required"
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                {passworderror ? (
                  <span className="text-xs text-red-400">
                    Field Cannot be Empty!
                  </span>
                ) : null}
              </div>
              <div className="mt-4">
                <label className="block">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password2"
                  name="password2"
                  required="required"
                  onKeyUp={checkPassword}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <span id="message" className="text-xs text-red-400"></span>
              <div className="flex">
                <button
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  onClick={handleSubmit}
                >
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <Link to="/login">
                  {" "}
                  <button className="px-6 py-2 mt-4 text-blue bg-white-600 rounded-lg hover:bg-gray-300">
                    Login
                  </button>
                </Link>
              </div>
            </div>
            <Routes>
              <Route path="/login/*" element={<Login />} />
            </Routes>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
