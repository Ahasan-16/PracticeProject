import React from 'react';

const Page = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <button className="
        bg-blue-600         /* background color */
        text-white           /* text color */
        px-6 py-3            /* padding: x=6, y=3 */
        rounded-lg           /* rounded corners */
        shadow-md            /* subtle shadow */
        hover:bg-green-600  /* hover color */
        transition-colors    /* smooth color change on hover */
        duration-800         /* animation duration 300ms */
        active:scale-[2]      /* click effect: slightly smaller */
      ">
                Click Me
            </button>
        </div>
    );
};

export default Page;