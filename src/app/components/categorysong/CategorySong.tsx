"use client";
import { db } from "@/app/db";
import { ref, update } from "firebase/database";
import Link from "next/link"
import { useState } from "react";
import { FaPlay, FaHeart } from "react-icons/fa6"

export const CategorySong =(props :{item:any})=>{
    const {item} =props;
    const [state, setState] = useState(item.statuslike);

    const handelClick =(event:any)=>{
        if(state=="false") 
        {
            event.target.style.background=" ";
            setState("true");
            update(ref(db, 'songs/' + item.keysong), {
                like:"true"
            })
        }
        else if(state=="true") 
        {
            event.target.style.background="[#00ADEF]";
            setState("false");
            update(ref(db, 'songs/' + item.keysong), {
                like:"false"
            })
        }
    }
    const clickPlay = ()=>{
      const bottom:any = document.querySelector(".bottom");
      if(bottom)
      {
        // lay thong tin
        // audio
        const innerAudio= bottom.querySelector(".inner-audio");
        const innerSource = innerAudio?.querySelector("source");
        innerSource.src=item.audio;
        innerAudio.load();
        innerAudio.volume= 0.8;
        // image
        const innerImage = bottom.querySelector(".inner-image");
        innerImage.src=item.img;

        // Song
        const innerTitle= bottom.querySelector(".inner-title");
        if(innerTitle) innerTitle.innerHTML=item.title;

        // Singer
        const innerSinger= bottom.querySelector(".inner-singer");
        innerSinger.innerHTML=item.singer;

        bottom.classList.remove("hidden");

        //play
        const buttonClick = bottom.querySelector(".button-click");
        const buttonPause  = buttonClick.querySelector(".button-pause");
        const buttonPlay = buttonClick.querySelector(".button-play");
        if(buttonClick)
        {
          buttonPause.classList.remove("hidden");
          buttonPlay.classList.add("hidden");
          innerAudio.play();
        }
        
        const playCurrent = bottom.querySelector(".current-time");
        const playTotal = bottom.querySelector(".total-time");
        //time max song
        innerAudio.onloadedmetadata =() =>{
        const totalTime = innerAudio.duration;
        playTotal.max= totalTime;

        //time current song
        innerAudio.ontimeupdate = () =>{
          const currentTime = innerAudio.currentTime;
          const percent = currentTime * 100 / totalTime;
          playCurrent.style.width = `${percent}%`;
          playTotal.value=currentTime;
          if(currentTime==totalTime)
          {
            buttonPause.classList.add("hidden");
            buttonPlay.classList.remove("hidden");
          }
        }
        }
      }
    }

    return(
        <div className="bg-[#212121] py-[10px] px-[18px] rounded-[15px] flex items-center item-song">
            <audio className="hidden time-audio">
                <source src="/" className="time-audio" type="audio/mpeg"/>
            </audio>
            <button onClick={clickPlay} className="text-white py-[9px]">
                <FaPlay />
            </button>
            <Link href={`../song/${item.keysong}`}>
                <img src={item.img} alt="image" className="ml-[12px] w-[42px] aspect-square object-cover rounded-[6px]"></img>
            </Link>
            <span className="ml-[12px] font-[700] text-[14px] text-[#FFFFFF]">{item.title}</span>
            <div className="flex-1 flex justify-end mr-[280px]">
                <div className="w-[200px] font-[400] text-[12px] text-[#FFFFFF] text-center">
                    {item.singer}
                </div>
            </div>
            <div className="mr-[18px] font-[400] text-[14px] text-[#FFFFFF] song-time"></div>
            <button onClick={handelClick} className={"text-[16px] hover:text-[#00ADEF]" +  (state == "true" ? " text-[#00ADEF]": " text-white") }>
                <FaHeart />
            </button>
      </div>
    )
}