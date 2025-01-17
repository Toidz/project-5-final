"use client"
import { Playsong } from "../play/playsong";
import { Playtime } from "../play/playtime";
import { Playvolume } from "../play/playvolume";
export const Bottom = ()=>{
  return(
    <>
      <div className="py-[20px] bg-[#212121] border-t border-[#494949] fixed bottom-0 right-0 z-9999 w-full bottom hidden">
        <audio className="inner-audio hidden">
          <source src="/" type="audio/mpeg"/>
        </audio>
        <div className="container mx-auto flex gap-[67px]">
          <div className="flex items-center">
            <img src="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg" alt="img" className="w-[48px] h-[48px] rounded-[6px] inner-image"></img>
            <div className="ml-[12px] font-[700] text-white">
              <div className="text-[15px] text-white inner-title">Song</div>
              <div className="text-[12px] text-[#FFFFFF70] whitespace-nowrap inner-singer">Singer</div>
            </div>
          </div>
          <div className="flex-1 text-center"> 
            <Playsong />
            <Playtime />
          </div>
          <div className="flex items-center">
            <Playvolume />
          </div>
        </div>
      </div>
    </>
  )
}