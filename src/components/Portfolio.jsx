import React from "react";
import portfolio1 from "../assets/portfolio/portoflio1.png";
import installNode from "../assets/portfolio/portoflio2.png";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/portoflio3.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio1,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b h-screen pb-10 from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Portfolio
          </p>
          <p className="py-6">Check out some of my recent project here</p>
        </div>

        <div className="grid sm:grid-cols-2 mb-10 md:grid-cols-3 gap-8 px-12 sm:px-0">

        {/* portfolio1 */}
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={portfolio1}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center mt-6 justify-center">
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                  <a target="_blank" rel="noreferrer" href="https://various-partner.surge.sh/">Demo</a>
                </button>
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-client">Client Code</a>
                </button>
                <button className=" px-3 py-3 duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-server">Server Code</a>
                </button>
              </div>
            </div>
            {/* portfolio2 */}
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={reactParallax}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center mt-6 justify-center">
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                  <a target="_blank" rel="noreferrer" href="https://various-partner.surge.sh/">Demo</a>
                </button>
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-client">Client Code</a>
                </button>
                <button className=" px-3 py-3 duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-server">Server Code</a>
                </button>
              </div>
            </div>
            {/* portfolio3 */}
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={navbar}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center mt-6 justify-center">
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                  <a target="_blank" rel="noreferrer" href="https://various-partner.surge.sh/">Demo</a>
                </button>
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-client">Client Code</a>
                </button>
                <button className=" px-3 py-3 duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-server">Server Code</a>
                </button>
              </div>
            </div>
            {/* portfolio4 */}
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={reactSmooth}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center mt-6 justify-center">
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                  <a target="_blank" rel="noreferrer" href="https://various-partner.surge.sh/">Demo</a>
                </button>
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-client">Client Code</a>
                </button>
                <button className=" px-3 py-3 duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-server">Server Code</a>
                </button>
              </div>
            </div>
            {/* portfolio5 */}
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={installNode}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center mt-6 justify-center">
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                  <a target="_blank" rel="noreferrer" href="https://various-partner.surge.sh/">Demo</a>
                </button>
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-client">Client Code</a>
                </button>
                <button className=" px-3 py-3 duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-server">Server Code</a>
                </button>
              </div>
            </div>
            {/* portfolio6 */}
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={reactWeather}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center mt-6 justify-center">
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                  <a target="_blank" rel="noreferrer" href="https://various-partner.surge.sh/">Demo</a>
                </button>
                <button className=" px-3 py-3  duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-client">Client Code</a>
                </button>
                <button className=" px-3 py-3 duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/student-class-management-server">Server Code</a>
                </button>
              </div>
            </div>
     
  
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
