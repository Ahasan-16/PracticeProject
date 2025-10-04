'use client'
import React, {useState} from 'react';
import Navbar from "@/components/navbar";
import Image from "next/image";

const Page = () => {

    const [currentImage, setCurrentImage] = useState('https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/1.jpg?5491')
    return (
        <div className={"bg-[#f4f4f4]"}>
            <Navbar/>
            <div >
                <div className={"ml-[30px] p-[40px]"}>
                   <Image className={'rounded-[10px]'} src={currentImage} alt={"logo"} height={555} width={555}/>
                    <div className={"flex w-[555px] justify-between mt-[10px] p-[10px]"}>
                        <Image className={"transition-all duration-[700ms] cursor-pointer ease-in-out hover:scale-[1.2]  hover:border-[2px] hover:border-black hover:rounded-[4px]"} onClick={()=>setCurrentImage('https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/2.jpg?5491')} src='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/2.jpg?5491' alt={"logo"} height={80} width={80}/>
                        <Image className={"transition-all duration-[700ms] cursor-pointer ease-in-out hover:scale-[1.2]  hover:border-[2px] hover:border-black hover:rounded-[4px]"} onClick={()=>setCurrentImage('https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/5.jpg?5491')} src='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/5.jpg?5491' alt={"logo"} height={80} width={80}/>
                        <Image className={"transition-all duration-[700ms] cursor-pointer ease-in-out hover:scale-[1.2]  hover:border-[2px] hover:border-black hover:rounded-[4px]"} onClick={()=>setCurrentImage('https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/7.jpg?5491')} src='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/7.jpg?5491' alt={"logo"} height={80} width={80}/>
                        <Image className={"transition-all duration-[700ms] cursor-pointer ease-in-out hover:scale-[1.2]  hover:border-[2px] hover:border-black hover:rounded-[4px]"} onClick={()=>setCurrentImage('https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/2.jpg?5491')} src='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/2.jpg?5491' alt={"logo"} height={80} width={80}/>
                        <Image className={"transition-all duration-[700ms] cursor-pointer ease-in-out hover:scale-[1.2]  hover:border-[2px] hover:border-black hover:rounded-[4px]"} onClick={()=>setCurrentImage('https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/5.jpg?5491')} src='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/5.jpg?5491' alt={"logo"} height={80} width={80}/>
                        <Image className={"transition-all duration-[700ms] cursor-pointer ease-in-out hover:scale-[1.2]  hover:border-[2px] hover:border-black hover:rounded-[4px]"} onClick={()=>setCurrentImage('https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/7.jpg?5491')} src='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/7.jpg?5491' alt={"logo"} height={80} width={80}/>

                    </div>

                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Page;