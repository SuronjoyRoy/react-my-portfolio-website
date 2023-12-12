import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a proficient and dynamic MERN Stack Developer with a passion for crafting scalable web applications.

          I am working in the MERN (Html,Css, Tailwind, Bootstrap, JavaScript and React.js, Node.js) technology stack, demonstrating a comprehensive understanding of both front-end and back-end development. I can create interactive and user-friendly interfaces, ensuring a seamless and engaging user experience. The expertise extends to crafting responsive and visually appealing UIs that align with the latest design principles and user experience best practices.

        </p>

        <br />

        <p className="text-xl">
        On the server side, I am adept at using Node.js, firebase, MongoDB, and Express.js to develop scalable and efficient back-end solutions. This includes designing and implementing RESTful APIs, managing databases using MongoDB, and ensuring the overall performance and security of web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
