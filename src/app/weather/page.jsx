import React from 'react';

const Page = () => {
    return (
        <div className={"flex justify-center items-center bg-[url('https://media.istockphoto.com/id/926497236/photo/tropical-sea-in-summer.jpg?s=612x612&w=0&k=20&c=SgT--E-a5_UF4GPVnpC6r1IDtThuDiUHmtTbhHg5zJA=')] bg-cover h-[100vh] bg-center"}>
            <div className={"w-[760px] h-[537px] bg-[rgba(34,34,34,0.8)] rounded-[10px] flex flex-col items-center"}>
                <div className={"flex flex-col items-center "}>
                    <h1 className={"text-[45px] text-[#ff8c00] font-bold"}>Weather Explorer</h1>
                    <p className={"text-[20px] text-gray-400 font-bold"}>Stay updated with the latest weather conditions</p>
                </div>
                <div className={"flex justify-center mt-[20px]"}>
                    <input className={"w-[540px] h-[45px] bg-[rgba(34,34,34,0.8)] rounded-[10px] mr-[20px] p-[10px] text-gray-50"} placeholder={"Enter city name..."}/>
                    <button className={"w-[90px] h-[45px] bg-[#ff8c00] rounded-[13px] text-gray-50 text-[16px]" }>Search</button>
                </div>
                <div className={"w-[660px]  bg-[rgba(34,34,34,0.8)] rounded-[10px] mt-[20px] pl-[40px]"}>
                    <div></div>
                    <div className={"p-[20px]"}>
                        <div className={"text-[35px] text-[#ff8c00]"}>City</div>
                        <div className={"text-[20px]"}>--°C</div>
                        <div className={"text-[20px]"}>Description:--</div>
                    </div>
                </div>
                <div className={"flex justify-between w-[660px] mt-[30px]"}>
                    <div className={"w-[150px] h-[100px] bg-[rgba(34,34,34,0.8)] rounded-[10px] flex flex-col items-center justify-center"}>
                        <p className={"text-[25px] text-[#ff8c00]"}>Day</p>
                        <p className={"text-[20px] text-white"}>--°C</p>
                    </div>
                    <div className={"w-[150px] h-[100px] bg-[rgba(34,34,34,0.8)] rounded-[10px] flex flex-col items-center justify-center"}>
                        <p className={"text-[25px] text-[#ff8c00]"}>Day</p>
                        <p className={"text-[20px] text-white "}>--°C</p>
                    </div>
                    <div className={"w-[150px] h-[100px] bg-[rgba(34,34,34,0.8)] rounded-[10px] flex flex-col items-center justify-center"}>
                        <p className={"text-[25px] text-[#ff8c00]"}>Day</p>
                        <p className={"text-[20px] text-white"}>--°C</p>
                    </div>
                    <div className={"w-[150px] h-[100px] bg-[rgba(34,34,34,0.8)] rounded-[10px] flex flex-col items-center justify-center"}>
                        <p className={"text-[25px] text-[#ff8c00]"}>Day</p>
                        <p className={"text-[20px] text-white"}>--°C</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;