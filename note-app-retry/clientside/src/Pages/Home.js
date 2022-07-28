import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <main className="h-96 content-center mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 md:mt-24 lg:mt-20 lg:px-8 xl:mt-28">
        <div className=" sm:text-center lg:text-left lg:w-1/2 lg:pl-8">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              Every Great Idea Started as a
            </span>
            <span className="block text-blue-600 xl:inline"> Note</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-5 sm:mt-8 ">
            <div className="rounded-md">
              <Link to="/login">
                <button className="text-lg px-6 py-3 text-white bg-blue-600 hover:bg-blue-900 rounded-lg">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
