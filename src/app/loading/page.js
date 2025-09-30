import React from 'react';

const Page = () => {
    return (
        <div>
            <div className={"h-[200px] w-[200px] border-[10px] absolute top-[100px] left-[100px] rounded-[50%]  border-t-amber-300 animate-spin"}></div>
            <div className={"h-[200px] w-[200px] bg-red-600 absolute top-[100px] left-[400px] rounded-[50%] colorAnimate"}></div>

        </div>
    );
};

export default Page;