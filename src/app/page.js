import React from 'react';

const Page = () => {
    return (
        <div>
            <div className={"h-[100vh] bg-gray-100"}>
                <div className="flex justify-center flex-col items-center">
                    <div className={"bg-[url('https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg')] bg-cover w-[300px] h-[100px] "}></div>
                    <div className="w-[420px] h-[580px] bg-white rounded-[10px] ">
                        <div className={"text-[25px] font-bold text-center"}>Create a new account</div>
                        <div className={"text-[15px] text-center mb-[10px]"}>It's quick and easy</div>
                        <hr/>
                        <div className={"flex justify-between"}>
                            <input type ={"text"} placeholder={"First name"} className={"w-[184px] h-[40px] border-[2px] p-[11px] m-[10px] rounded-[5px]"}/>
                            <input type ={"text"} placeholder={"Surname"} className={"w-[184px] h-[40px] border-[2px] p-[11px] m-[10px] rounded-[5px]"} />
                        </div>
                        <div className={"m-[10px]"}>Gender</div>
                        <div className={"flex justify-between m-[10px]"}>
                            <div className={"w-[100px] h-[36px] flex justify-between border-[2px] rounded-[5px] p-[5px]"}>
                                <div>Female</div>
                                <div><input type={"radio"}/></div>
                            </div>
                            <div className={"w-[100px] h-[36px] flex justify-between border-[2px] rounded-[5px] p-[5px]"}>
                                <div>Male</div>
                                <div><input type={"radio"}/></div>
                            </div>
                            <div className={"w-[100px] h-[36px] flex justify-between border-[2px] rounded-[5px] p-[5px]"}>
                                <div>Custom</div>
                                <div><input type={"radio"}/></div>
                            </div>
                        </div>
                        <div><input type ={"text"} placeholder={"First name"} className={"w-[100%] h-[40px] border-[2px] p-[11px] rounded-[5px]"}/></div>
                        <div><input type ={"text"} placeholder={"Surname"} className={"w-[184px] h-[40px] border-[2px] p-[11px] m-[10px] rounded-[5px]"} /></div>







                    </div>

                </div>

            </div>
        </div>
    );
};

export default Page;