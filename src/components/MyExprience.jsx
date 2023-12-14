import React from 'react';

const MyExprience = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-2">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        My Exprience
                    </p>
                </div>

                <p className="text-xl mt-20">
                My expertise lies in harnessing the power of JavaScript and its associated technologies - ReactJs for dynamic front-end experiences, NodeJs and ExpressJs for robust server-side development, along with MongoDB for efficient and scalable database solutions. I am also in the learning zone of Typescript and NextJs.

                </p>

                <br />

                <p className="text-xl">
                    On the server side, I am adept at using Node.js, firebase, MongoDB, and Express.js to develop scalable and efficient back-end solutions. This includes designing and implementing RESTful APIs, managing databases using MongoDB, and ensuring the overall performance and security of web applications.
                </p>
            </div>
        </div>
    );
};

export default MyExprience;