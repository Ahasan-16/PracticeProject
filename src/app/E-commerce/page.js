'use client'
import React, {useState} from 'react';
import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";

const Page = () => {

    const [currentImage, setCurrentImage] = useState('https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/1.jpg?5491')
    const [value, setValue] = useState(0);
    const incrase=()=>{
        setValue(value+1);
    }
    const decrase = ()=>{

        setValue(value?value-1:0);
    }

    return (
        <div className={"bg-[#f4f4f4]"}>
            <Navbar/>
            <div className={"flex p-[50px] justify-evenly"}>
                <div >
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
                <div className={"bg-white p-[30px] rounded-[10px] w-[505px]"}>
                    <h1 className={"text-[40px] font-bold"}>Elegant Luxury Watch</h1>
                    <p className={"text-[16px] uppercase"}>Prestige time co.</p>
                    <div className={"mb-[20px]"}>
                        <span className={"text-[21px] mr-[10px] font-bold"}>$499.99</span>
                        <span className={"text-[21px] mr-[10px] text-gray-400 line-through"}>$799.99</span>
                        <span className={"text-[21px] mr-[10px] "}>38% OFF</span>
                    </div>
                    <p className={"text-[17px] text-[#555555] mb-[20px]"}>This luxurious timepiece combines elegance with precision craftsmanship. Perfect for formal occasions or everyday wear, it features premium materials and impeccable design.</p>
                        <div className={"text-[16px]"}>
                            <span >⭐</span>
                            <span className={"p-[3px]"}>⭐</span>
                            <span className={"p-[3px]"}>⭐</span>
                            <span className={"p-[3px]"}>⭐</span>
                            <span className={"p-[3px]"}>⭐</span>
                            <span className={"ml-[12px] text-[#555555]"}>Rated 4.8/5 (256 reviews)</span>
                        </div>
                    <div className={"mt-[10px] "}>
                        <button onClick={decrase} className={"mr-[10px] w-[42px] h-[47px] bg-[#1e293b] text-white text-[27px] rounded-[4px] cursor-pointer"}>-</button>
                        <input value={value} className={" mr-[10px] w-[50px] h-[20px]  border-[2px] rounded-[4px] text-center"} disabled={true}/>
                        <button onClick={incrase} className={"w-[42px] h-[47px] bg-[#1e293b] text-white text-[27px] rounded-[4px] cursor-pointer"}>+</button>
                    </div>
                    <button className={"w-[445px] h-[52px] bg-[#1e293b] rounded-[10px] text-white text-[20px] mt-[20px] cursor-pointer"}>Add to Bag</button>
                    <div className={"w-[445px] h-[157px] bg-[#f4f4f4] rounded-[14px] p-[20px] mt-[45px] text-center"}>
                        <h3 className={'text-center text-[#1e293b] text-[20px] font-bold'}>Limited-Time Offer!</h3>
                        <p className={'text-center text-[#555555] '}>Get an additional 10% off your first purchase when you sign up for our newsletter.</p>
                        <button className={'w-[117px] h-[37px] bg-[#1e293b] text-white rounded-[10px] mt-[10px] cursor-pointer'}>Sign Up</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Page;