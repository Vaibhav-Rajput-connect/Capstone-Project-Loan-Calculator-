import React, { useState } from "react";
import Footer from './Footer.jsx';


const Signup = () => {
  const [isSignup, setIsSignup] = useState(true);

  const toggleForm = () => setIsSignup(!isSignup);

  return (
    <div>
        <div className="flex flex-col mt-20 mb-20 items-center justify-center">
      <div className="bg-white p-20 mt-10 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        {isSignup ? (
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg p-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg p-2"
            />
            <button
              type="submit"
              className="bg-green-500 text-white rounded-lg py-2 hover:bg-green-600"
            >
              Login
            </button>
          </form>
        )}

        <p className="text-center mt-4 text-gray-600">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-blue-500 font-semibold hover:underline"
          >
            {isSignup ? "Login here" : "Sign Up here"}
          </button>
        </p>
      </div>
      </div>
      <Footer />

    </div>
  );
};

export default Signup;
