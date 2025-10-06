import React from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Page = () => {
    return (
        <div>
            <Navbar/>
            <h1 className={"h-[100vh]"}>This about page</h1>
            <Footer/>
        </div>
    );
};

export default Page;