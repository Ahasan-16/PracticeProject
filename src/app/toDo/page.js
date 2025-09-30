

const Page = () => {
    return (
        <div className={"h-[100vh] bg-[#E8F4F8] flex justify-center items-center "}>
            <div className={"w-[500px] h-[188px] bg-white rounded-2xl p-[30px]"}>
                <h1 className={"text-[35px] text-center text-[#1A73E8] font-bold"}>Task Manager</h1>
                <div className={"mt-[25px]  ml-[10px]"}>
                        <input className={"w-[230px] h-[45px] border-2  border-[#1A73E8] rounded-[8px] mr-[15px] p-[10px]"} placeholder={"What's need to be done?"}/>
                        <button className={"bg-[#1A73E8] text-white w-[150px] h-[45px] rounded-[8px] cursor-pointer"}>Add Task</button>
                </div>
            </div>

        </div>
    );
};

export default Page;