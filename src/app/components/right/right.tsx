'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Menu } from "../menu/Menu";
export const Right = ()=>{
   const [value,setValue] = useState("");
   const router = useRouter();
   const handleChange = (event: any)=>{
    setValue(event.target.value);
   }
   const handleSubmit = (event:any)=>{
    event.preventDefault();
    router.push(`/search?keyword=${value}`);
   }
   const handleClick =()=>{
        const innerSearch = document.querySelector(".inner-search");
        const innerOverlay = document.querySelector(".inner-overlay");
        if(innerOverlay)
        {
            innerOverlay.classList.toggle("showsearch")
        }
        if(innerSearch)
        {
            innerSearch.classList.toggle("showform")
        }
   }
    const closeSearch =()=>{
        const innerSearch = document.querySelector(".inner-search");
        const innerOverlay = document.querySelector(".inner-overlay");
        if(innerOverlay)
        {
            innerOverlay.classList.toggle("showsearch")
        }
        if(innerSearch)
        {
            innerSearch.classList.toggle("showform")
        }
   }
   return(
   <>
    <div className="flex gap-[20px] text-[26px] xl:justify-normal justify-between">
        <div className="py-[15px] lg:hidden block text-white">
            <Menu />
        </div>
        <div className="lg:hidden block xl:h-[42px] h-[36px] py-[12px]" >
            <img src="/Logo.svg" alt="logo" className="xl:h-[42px] h-[36px] w-auto"></img>
        </div>
        <form 
        onSubmit={handleSubmit}
        className="bg-[#212121] lg:flex hidden px-[30px] py-[15px] rounded-[50px] gap-[20px] mb-[30px] lg:flex-1 flex-0 w-[400px] inner-search"
        >
            <button className="text-white text-[20px]"> 
                <IoSearch />
            </button>
            <input 
            autoComplete="off"
            onChange={handleChange}
            name="nameSearch" placeholder="Tìm kiếm..." className="text-white lg:text-[20px] text-[16px] outline-none lg:flex-1 flex-0 placeholder:text-[16px] placeholder:font-[500] placeholder:text-white bg-[#212121] "></input>
        </form>
        <div className="inner-overlay hidden" onClick={closeSearch}></div>
        <div className="py-[15px] lg:hidden block text-white">
            <button onClick={handleClick}>
                <CiSearch />
            </button>
        </div>
    </div>
   </>
   )
}

