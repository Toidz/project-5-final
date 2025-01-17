"use client";
import { db } from "@/app/db"
import { ref, update } from "firebase/database"
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
export const ButtonLike = (props:{id:any, statuslike:any})=>{
    const {id} = props;
    const {statuslike} = props;
    const [state, setState] = useState(statuslike);
    const handelClick =()=>{
        if(state=="false") 
        {
            setState("true");
            update(ref(db, 'songs/' + id), {
                like:"true"
            })
        }
        else if(state=="true") 
        {
            setState("false");
            update(ref(db, 'songs/' + id), {
                like:"false"
            })
        }
    }
    return(
        <button id={id} onClick={handelClick} className={"text-[16px] p-[8px] text-white border border-white rounded-[99px] hover:bg-[#00ADEF]" +  (state == "true" ? " bg-[#00ADEF] border-none ": " ") }>
          <FaRegHeart />
        </button>
        
    )
}