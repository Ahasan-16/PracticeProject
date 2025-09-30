import React from 'react';

const Page = () => {
    return (
        <div className={"bg-black h-[100vh]"}>
            <div className={"bg-teal-200 h-[20%] p-[20px] "}>
                <p className={"text-[40px] font-bold"}>Hey! Read Me...</p>
                <p>This is an example of what you can do with pure css to style radio buttons or checkboxes. If you are looking a more flexible & mordern way to style radio buttons on forms, take a look at this version with SVG icons. I also wrote a post about it.</p>
            </div>
            <div className={"p-[20px]"}>
                <p className={"text-[30px] font-bold text-white"}>Your favorite thing in the world:</p>

                <div className={"flex  items-center"}>
                    <input type={"radio"} id={"p"} name={"class"} className={"scale-[2] "}/>
                    <label htmlFor={"p"} className={"text-gray-400 hover:text-white text-[50px] ml-[10px]"}>Pizza</label><br/>
                </div>

                <div className={"flex  items-center"}>
                    <input type={"radio"} id={"b"} name={"class"}  className={"scale-[2] "}/>
                    <label htmlFor={"b"} className={"text-gray-400 hover:text-white text-[50px] ml-[10px]"}>Baccon</label><br/>
                </div>

                <div className={"flex  items-center"}>
                    <input type={"radio"} id={"c"} name={"class"}  className={"scale-[2] "}/>
                    <label htmlFor={"c"} className={"text-gray-400 hover:text-white text-[50px] ml-[10px]"}>Chicken</label>
                </div>


            </div>


        </div>
    )
};

export default Page;