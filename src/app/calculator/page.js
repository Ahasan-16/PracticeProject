import React from 'react';

const Page = () => {
    return (
        <div className={"bg-blue-500 h-[100vh] flex items-center justify-center"}>
            <div className={"w-[370px] h-[468px] bg-white rounded-[8px] p-[35px] flex flex-col  items-center"}>
                <input className={"w-[300px] h-[70px] rounded-[10px] bg-gray-200 p-[35px] text-[25px] outline-none"} />
                <div className={"mt-[10px]"}>
                    <button className={"bg-[#ffd166] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>+</button>
                    <button className={"bg-[#ffd166] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>-</button>
                    <button className={"bg-[#ffd166] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>/</button>
                    <button className={"bg-[#ffd166] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center "}>*</button>
                </div>
                <div className={"mt-[10px]"}>
                    <button className={"bg-[#bbdffb] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>7</button>
                    <button className={"bg-[#bbdffb] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>8</button>
                    <button className={"bg-[#bbdffb] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>9</button>
                    <button className={"bg-[#bbdffb] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center "}>6</button>
                </div>
                <div className={"mt-[10px]"}>
                    <button className={"bg-[#bbdffb] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>2</button>
                    <button className={"bg-[#bbdffb] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>3</button>
                    <button className={"bg-[#bbdffb] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>4</button>
                    <button className={"bg-[#bbdffb] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center "}>5</button>
                </div>
                <div className={"mt-[10px]"}>
                    <button className={"bg-[#bbdffb] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>1</button>
                    <button className={"bg-[#bbdffb] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>0</button>
                    <button className={"bg-[#bbdffb] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>.</button>
                    <button className={"bg-[#f55c47] w-[63px] h-[60px] rounded-[8px] text-[35px] text-center  text-white"}>c</button>
                </div>
                <div className={"absolute left-[205px] top-[510px]"}>
                    <button className={"w-[142px] h-[60px] bg-[#06d6a0] rounded-[8px] text-[35px] text-center"}>=</button>
                </div>

            </div>
        </div>
    );
};

export default Page;