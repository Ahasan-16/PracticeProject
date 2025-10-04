'use client'
import React, {useRef, useState} from 'react';
const apiKey='da5cc509bc967933cf9f957a7a06eb9b';

const Page = () => {


    const [data, setData] = useState({});
    const [forecastData, setForecastData] = useState({});
    const [city, setCity] = useState('');
    const myref = useRef(null);
    const getData = async (city) => {
        const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        let res=await fetch(api);
        let rslt=await res.json() ;
        const forecastapi=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
        res=await fetch(forecastapi) ;
        const rslt1=await res.json() ;

        // let temperature=rslt['main'].temp;
        // let description=rslt['weather'][0].description;
        // console.log(rslt['weather'][0].description);
        // console.log(rslt);
        setData(rslt);
        setForecastData(rslt1);
        console.log(rslt1);

        // let dt_txt=rslt1.list[8*1].dt_txt;
        // let date=new Date(dt_txt);
        // let options={weekday:'long'};
        // let dayName=date.toLocaleDateString('en-US',options);
        // console.log(dayName);




        myref.current.value='';


    }

    return (

        <div className={"flex justify-center items-center bg-[url('https://media.istockphoto.com/id/926497236/photo/tropical-sea-in-summer.jpg?s=612x612&w=0&k=20&c=SgT--E-a5_UF4GPVnpC6r1IDtThuDiUHmtTbhHg5zJA=')] bg-cover h-[100vh] bg-center"}>
            {/*<div>{data.main?.temp}</div>*/}
            <div className={"w-[760px] h-[537px] bg-[rgba(34,34,34,0.8)] rounded-[10px] flex flex-col items-center"}>
                <div className={"flex flex-col items-center "}>
                    <h1 className={"text-[45px] text-[#ff8c00] font-bold"}>Weather Explorer</h1>
                    <p className={"text-[20px] text-gray-400 font-bold"}>Stay updated with the latest weather conditions</p>
                </div>
                <div className={"flex justify-center mt-[20px]"}>
                    <input ref={myref} onChange={(e)=>setCity(e.target.value)} className={"w-[540px] h-[45px] bg-[rgba(34,34,34,0.8)] rounded-[10px] mr-[20px] p-[10px] text-gray-50"} placeholder={"Enter city name..."}/>
                    <button onClick={()=>{getData(city)}} className={"w-[90px] h-[45px] bg-yellow-600 hover:bg-[#ff8c00] cursor-pointer rounded-[13px] text-gray-50 text-[16px]" }>Search</button>
                </div>
                <div className={"w-[660px]  bg-[rgba(34,34,34,0.8)] rounded-[10px] mt-[20px] pl-[40px]"}>
                    <div></div>
                    <div className={"p-[20px]"}>
                        <div className={"text-[35px] text-[#ff8c00] capitalize"}>{data.main?data.name:'City'}</div>
                        <div className={"text-[20px] text-gray-50"}>{data.main?data.main.temp+'°C':'--°C'}</div>
                        <div className={"text-[20px] text-gray-50"}>Description: {data.weather?data.weather[0].description:'--'}</div>
                    </div>
                </div>
                <div className={"flex justify-between w-[660px] mt-[30px]"}>
                    <div className={"w-[150px] h-[100px] bg-[rgba(34,34,34,0.8)] rounded-[10px] flex flex-col items-center justify-center"}>
                        <p className={"text-[25px] text-[#ff8c00]"}>{forecastData.list?new Date(forecastData.list[8*1].dt_txt).toLocaleDateString('en-us',{weekday:'long'}):'Day'}</p>
                        <p className={"text-[20px] text-white"}>{forecastData.list?forecastData.list[8*1].main.temp+'°C':'--°C'}</p>
                    </div>
                    <div className={"w-[150px] h-[100px] bg-[rgba(34,34,34,0.8)] rounded-[10px] flex flex-col items-center justify-center"}>
                        <p className={"text-[25px] text-[#ff8c00]"}>{forecastData.list?new Date(forecastData.list[8*2].dt_txt).toLocaleDateString('en-us',{weekday:'long'}):'Day'}</p>
                        <p className={"text-[20px] text-white "}>{forecastData.list?forecastData.list[8*2].main.temp+'°C':'--°C'}</p>
                    </div>
                    <div className={"w-[150px] h-[100px] bg-[rgba(34,34,34,0.8)] rounded-[10px] flex flex-col items-center justify-center"}>
                        <p className={"text-[25px] text-[#ff8c00]"}>{forecastData.list?new Date(forecastData.list[8*3].dt_txt).toLocaleDateString('en-us',{weekday:'long'}):'Day'}</p>
                        <p className={"text-[20px] text-white"}>{forecastData.list?forecastData.list[8*3].main.temp+'°C':'--°C'}</p>
                    </div>
                    <div className={"w-[150px] h-[100px] bg-[rgba(34,34,34,0.8)] rounded-[10px] flex flex-col items-center justify-center"}>
                        <p className={"text-[25px] text-[#ff8c00]"}>{forecastData.list?new Date(forecastData.list[8*4].dt_txt).toLocaleDateString('en-us',{weekday:'long'}):'Day'}</p>
                        <p className={"text-[20px] text-white"}>{forecastData.list?forecastData.list[8*4].main.temp+'°C':'--°C'}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;