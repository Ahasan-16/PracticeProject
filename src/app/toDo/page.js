'use client'
import {useState} from "react";

const Page = () => {

    const [data, setData] = useState("")
    const [data1, setData1] = useState([]);

    const Add=()=>{

        setData1([...data1,data]);
        setData("");

    }
    const remove=(index)=>{
        setData1(prevArray => prevArray.filter((element,i)=>i!==index));
    }
    const [ind, setInd] = useState([])
    const complete=(index)=>{
        if(ind.includes(index)){
            setInd(preArr=>preArr.filter((element,i)=>element!==index))
        }
        else {
            setInd([...ind,index]);
        }
    }

    return (
        <div className={"h-[100vh] bg-[#E8F4F8] flex justify-center items-center "}>
            <div className={" bg-white rounded-2xl p-[30px]"}>
                <h1 className={"text-[45px] text-center bg-gradient-to-r from-red-600 via-blue-700 to-green-500 bg-clip-text text-transparent font-bold"}>Task Manager</h1>
                <div className={"mt-[25px]  ml-[10px]"}>
                        <input value={data} onChange={(e)=>{setData(e.target.value)}} className={"w-[230px] h-[45px] border-2  border-[#1A73E8] rounded-[8px] mr-[15px] p-[10px]"} placeholder={"What's need to be done?"}/>
                        <button onClick={Add} className={"bg-blue-500 hover:bg-[#1A73E8] text-white w-[150px] h-[45px] rounded-[8px] cursor-pointer"}>Add Task</button>
                        <ul>
                            {
                                data1.map((item,index)=> {
                                   return (
                                       <div  key={index} className={"flex justify-between mt-[5px]"}>
                                          <div className={"flex items-center"}>
                                              <button onClick={()=>{complete(index)}} className={"cursor-pointer mr-[3px]"}>{ind.includes(index)?"☑":"☐"}</button>
                                              <li style={{textDecoration:ind.includes(index)?"line-through":"none"}} className={"text-[16px]"}>{item}</li>
                                          </div>

                                           <button onClick={()=>{remove(index)}} className={"p-[4px] border-[2px] rounded-[4px] bg-red-400 hover:bg-red-600 text-white cursor-pointer"}>Remove</button>
                                       </div>

                                    )
                                })
                            }


                        </ul>

                </div>
            </div>

        </div>
    );
};

export default Page;