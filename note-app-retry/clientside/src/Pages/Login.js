import React, { useState, useContext } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Register from "./Register";
import { UserContext } from "../UserContext";
import { axiosInstance } from "../config";

function Login() {
  const {login} = useContext(UserContext);
  const [details, setDetails] = useState({});
  const [error,setError] = useState(false);

  function handleChange(evt) {
    const value = evt.target.value;
    setDetails({
      ...details,
      [evt.target.name]: value,
    });
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axiosInstance.post(
        "/auth/login",
        details
      );
      if (user.data) {
        // loginChange(user.data);
        console.log("We got Users");
        localStorage.setItem('user', JSON.stringify(user.data))
        navigate("/notes");
      login(user.data);
      }
    } catch (error) {
      console.log(error.status);
      setError(true)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-1 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Sign In</h3>
        <form action="">
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="email"
                placeholder="Email"
                required={true} 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Password"
                required="required" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                onClick={handleSubmit}
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
              

              <Link to="/register">
                <button className="px-6 py-2 mt-4 text-blue bg-white-600 rounded-lg hover:bg-gray-300">
                  Register
                </button>
              </Link>
            </div>
            {error ? <span id='message' className="text-md pt-6 text-red-400">Incorrect Username or Password</span> : null}
          </div>
        </form>
      </div>
      <Routes>
        <Route path="/register/*" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Login;
