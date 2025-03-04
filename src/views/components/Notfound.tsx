import React from "react";
import { Link } from "react-router";

const Notfound = () => {
  return (
    <div className="bg-pattern min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute text-gray-200 text-[20rem] font-bold opacity-60 select-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        404
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-5xl relative z-10">
        <div className="text-left md:w-1/2 mb-8 md:mb-0 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
            Looks like you've found the doorway to the great nothing
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Sorry about that! Please visit our homepage to get where you need to
            go.
          </p>
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Take me there!
          </Link>
        </div>
        <div className="relative md:w-1/2 flex justify-center z-20">
          <div className="relative w-full max-w-xs">
            <svg
              viewBox="0 0 400 300"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                fill="#E6E8FF"
                d="M200 50 Q250 100, 200 150 Q150 200, 200 250"
                stroke="#A0A5FF"
                strokeWidth={2}
                opacity="0.3"
              />
              <path
                fill="#E6E8FF"
                d="M50 150 Q100 200, 150 150 Q200 100, 250 150"
                stroke="#A0A5FF"
                strokeWidth={2}
                opacity="0.3"
              />
              <g transform="translate(150, 100)">
                <path
                  d="M50 0 L100 50 L50 100 L0 50 Z"
                  fill="#6366F1"
                  opacity="0.2"
                />
                <g transform="translate(25, 25)">
                  <path d="M0 0 L50 0 L25 25 Z" fill="#6366F1" opacity="0.5" />
                </g>
              </g>
              <g transform="translate(200, 200) rotate(45)">
                <path
                  d="M0 0 L40 0 A20 20 0 0 1 20 20 L0 40 Z"
                  fill="#6366F1"
                  opacity="0.3"
                />
              </g>
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center">
                <div className="absolute w-16 h-16 bg-indigo-400 rounded-full animate-ping" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
