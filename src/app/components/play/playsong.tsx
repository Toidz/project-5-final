import { FaPause, FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa"

export const Playsong= ()=>{
    const handleClick = () =>{
    const bottom:any = document.querySelector(".bottom");
    if(bottom)
    {
    const innerAudio= bottom.querySelector(".inner-audio");
    const buttonClick = bottom.querySelector(".button-click");
    if(buttonClick)
    {
      const buttonPause  = buttonClick.querySelector(".button-pause");
      const buttonPlay = buttonClick.querySelector(".button-play");
      if(!buttonPause.classList.contains("hidden"))
      {
        innerAudio.pause();
        buttonPlay.classList.remove("hidden");
        buttonPause.classList.add("hidden")
      }
      else {
        innerAudio.play();
        buttonPlay.classList.add("hidden");
        buttonPause.classList.remove("hidden")
      }
    }
    }
   }
   
    return(
        <>
            <div className="flex gap-[42px] items-center justify-center mb-[8px]">
            <button className="text-white"><FaStepBackward /></button>
            <button onClick={handleClick} className="text-[16px] p-[8px] bg-[#00ADEF] text-white rounded-[99px] inline-flex button-click">
                <div className="button-play"><FaPlay /></div>
                <div className="button-pause hidden"><FaPause /></div>
            </button>
            <button className="text-white"><FaStepForward /></button>
            </div>
        </>
    )
}