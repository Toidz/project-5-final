"use client";
import { FaPlay} from "react-icons/fa";
export const ButtonPlay = (props:{id:any,item:any})=>{
    const {id,item} = props;
    const handelClick =()=>{
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
        <button id={id} onClick={handelClick} className={"text-[16px] p-[8px] text-white border border-white rounded-[99px] mr-[10px] "}>
          <FaPlay />
        </button>
    )
}