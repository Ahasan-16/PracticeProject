'use client'
import React, {useRef, useState} from 'react';

const Page = () => {
    const myref=useRef(null);
    const [expression, setExpression] = useState('')
    const append=(op)=>{
        setExpression(preEx=>{
            const newEx=preEx+op;
            myref.current.value=newEx;
            return newEx;
        });
    }
    const clear=()=>{
        myref.current.value='';
        setExpression('');
    }
    const calculate=()=>{
        try{
            const result=eval(myref.current.value);
            setExpression(result);
            myref.current.value=result;
        }
        catch(err){
            myref.current.value="Error";
        }

    }
    return (
        <div className={"bg-blue-500 h-[100vh] flex items-center justify-center"}>
           <h1 className={"absolute top-[60px] text-[40px] bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 bg-clip-text text-transparent font-bold uppercase"}>Calculator</h1>
            <div className={"w-[370px] h-[468px] bg-white rounded-[8px] p-[35px] flex flex-col  items-center"}>

                <input  ref={myref} className={"w-[300px] h-[70px] rounded-[10px] bg-gray-200 p-[35px] text-[25px] outline-none text-right"} disabled={true}/>
                <div className={"mt-[10px]"}>
                    <button onClick={()=>{append('+')}} className={"bg-[#ffd166] hover:bg-yellow-400 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>+</button>
                    <button onClick={()=>{append('-')}} className={"bg-[#ffd166] hover:bg-yellow-400 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>-</button>
                    <button onClick={()=>{append('/')}} className={"bg-[#ffd166] hover:bg-yellow-400 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>/</button>
                    <button onClick={()=>{append('*')}} className={"bg-[#ffd166] hover:bg-yellow-400 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center "}>*</button>
                </div>
                <div className={"mt-[10px]"}>
                    <button onClick={()=>{append('9')}} className={"bg-[#bbdffb] hover:bg-blue-500 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>9</button>
                    <button onClick={()=>{append('8')}} className={"bg-[#bbdffb] hover:bg-blue-500 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>8</button>
                    <button onClick={()=>{append('7')}} className={"bg-[#bbdffb] hover:bg-blue-500 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>7</button>
                    <button onClick={()=>{append('6')}} className={"bg-[#bbdffb] hover:bg-blue-500 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center "}>6</button>
                </div>
                <div className={"mt-[10px]"}>
                    <button onClick={()=>{append('2')}} className={"bg-[#bbdffb] hover:bg-blue-500 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>2</button>
                    <button onClick={()=>{append('3')}} className={"bg-[#bbdffb] hover:bg-blue-500 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>3</button>
                    <button onClick={()=>{append('4')}} className={"bg-[#bbdffb] hover:bg-blue-500 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>4</button>
                    <button onClick={()=>{append('5')}} className={"bg-[#bbdffb] hover:bg-blue-500 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center "}>5</button>
                </div>
                <div className={"mt-[10px]"}>
                    <button onClick={()=>{append('1')}} className={"bg-[#bbdffb] hover:bg-blue-500 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>1</button>
                    <button onClick={()=>{append('0')}} className={"bg-[#bbdffb] hover:bg-blue-500 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>0</button>
                    <button onClick={()=>{append('.')}} className={"bg-[#bbdffb] hover:bg-blue-500 cursor-pointer w-[63px] h-[60px] rounded-[8px] text-[35px] text-center mr-[9px]"}>.</button>
                    <button onClick={clear} className={"bg-[#f55c47] w-[63px] h-[60px] hover:bg-orange-600 cursor-pointer rounded-[8px] text-[35px] text-center  text-white"}>c</button>
                </div>
                <div className={"absolute left-[625px] top-[510px]"}>
                    <button onClick={calculate} className={"w-[142px] h-[60px] bg-[#06d6a0] hover:bg-green-600 cursor-pointer rounded-[8px] text-[35px] text-center"}>=</button>
                </div>

            </div>



        </div>
    );
};

export default Page;