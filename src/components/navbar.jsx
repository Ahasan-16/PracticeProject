import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={"w-full h-[95px] bg-[#1e293b] flex items-center p-[20px]"}>
            <div className={"uppercase text-[30px]  text-white font-bold mr-[15px]"}>timeless watches</div>
            <div className={"flex justify-between items-center w-[50%] mr-[30px] "}>
                <input className={"w-full h-[37px] bg-white rounded-[5px] p-[15px]"} type={'text'} placeholder={"Search..."}/>
                <button className={"text-[27px] p-[10px] cursor-pointer"}>🔍</button>
            </div>
            <div className={"flex justify-between gap-[10px] text-[18px] text-white font-bold"}>
                <Link href='/E-commerce'>Shop</Link><br/>
                <Link href={'/pages/NewArrivals'}>New Arrivals</Link><br/>
                <Link href={'/pages/Brands'}>Brands</Link><br/>
                <Link href={'/pages/About'}>About</Link><br/>
                <Link href={'/pages/Contact'}>Contact</Link>
            </div>

        </div>
    );
};

export default Navbar;