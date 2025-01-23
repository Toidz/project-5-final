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
          <div className="sm:container sm:mx-auto w-auto mx-[15px] flex gap-[67px] sm:flex-nowrap flex-wrap sm:h-auto h-[70px]">
            <div className="flex items-center">
              <img src="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg" alt="img" className="w-[48px] h-[48px] rounded-[6px] inner-image"></img>
              <div className="ml-[12px] font-[700] text-white">
                <div className="text-[15px] text-white inner-title">Song</div>
                <div className="text-[12px] text-[#FFFFFF70] whitespace-nowrap inner-singer">Singer</div>
              </div>
            </div>
            <div className="sm:flex-1 flex-none text-center sm:w-auto w-[100%] sm:mt-0 mt-[-100px]"> 
              <div className="sm:ml-0 ml-[170px] sm:mt-0 mt-[-10px]">
                <Playsong />
              </div>
              <div className=" w-[100%]">
                <Playtime />
              </div>
            </div>
            <div className="md:flex items-center hidden">
              <Playvolume />
            </div>
          </div>
        </div>
    </>
  )
}