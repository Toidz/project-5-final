'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
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
   return(
   <>
        <form 
        onSubmit={handleSubmit}
        className="bg-[#212121] px-[30px] py-[15px] rounded-[50px] flex gap-[20px] mb-[30px]"
        >
            <button className="text-white text-[20px]"> 
                <IoSearch />
            </button>
            <input 
            autoComplete="off"
            onChange={handleChange}
            name="nameSearch" placeholder="Tìm kiếm..." className="text-white outline-none flex-1 placeholder:text-[16px] placeholder:font-[500] placeholder:text-white bg-[#212121] "></input>
        </form>
   </>
   )
}

