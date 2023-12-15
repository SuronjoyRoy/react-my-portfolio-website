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
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a target="_blank" rel="noreferrer" href="https://various-partner.surge.sh/">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a target="_blank" rel="noreferrer" href="https://github.com/SuronjoyRoy/community-food-sharing-client">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
