import { db } from "@/app/db";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
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

  const [songs, setSongs] = useState<any[]>([]);
  useEffect(() => {
    const listSong = ref(db, "songs");
    onValue(listSong, (snapshot) => {
      const tempSongs: any[] = [];
      snapshot.forEach((item) => {
        const data = item.val();
        const key = item.key;
          const singerRef = ref(db, "singers/" + data.singerId[0]);
          onValue(singerRef, (singerSnapshot) => {
            const singerData = singerSnapshot.val();
            tempSongs.push({
            id: key,
            img: data.image,
            title: data.title,
            singer: singerData?.title,
            listen: data.listen,
            statuslike: data.like,
            audio: data.audio,
            })
            setSongs([...tempSongs]);
          });
      });
    });
  }, []);

  const [count,setCount] = useState(0);  
  const back =()=>{
    if(count>0)
    {
      setCount(count-1);
    }
    const bottom:any = document.querySelector(".bottom");
    if(bottom&& count>=0)
    {
      // lay thong tin
      // audio
      const innerAudio= bottom.querySelector(".inner-audio");
      const innerSource = innerAudio?.querySelector("source");
      innerSource.src=songs[count].audio;
      innerAudio.pause();
      innerAudio.load();
      innerAudio.play();
      innerAudio.volume= 0.8;
      // image
      const innerImage = bottom.querySelector(".inner-image");
      innerImage.src=songs[count].img;

      // Song
      const innerTitle= bottom.querySelector(".inner-title");
      if(innerTitle) innerTitle.innerHTML=songs[count].title;

      // Singer
      const innerSinger= bottom.querySelector(".inner-singer");
      innerSinger.innerHTML=songs[count].singer;
    }
   }
   const next =()=>{
    if(count<=8)
    {
      setCount(count+1);
    }
    const bottom:any = document.querySelector(".bottom");
    if(bottom&& count<=8)
    {
      // lay thong tin
      // audio
      const innerAudio= bottom.querySelector(".inner-audio");
      const innerSource = innerAudio?.querySelector("source");
      innerSource.src=songs[count].audio;
      innerAudio.pause();
      innerAudio.load();
      innerAudio.play();
      innerAudio.volume= 0.8;
      // image
      const innerImage = bottom.querySelector(".inner-image");
      innerImage.src=songs[count].img;

      // Song
      const innerTitle= bottom.querySelector(".inner-title");
      if(innerTitle) innerTitle.innerHTML=songs[count].title;

      // Singer
      const innerSinger= bottom.querySelector(".inner-singer");
      innerSinger.innerHTML=songs[count].singer;
    }
   }
    return(
        <>
            <div className="flex gap-[42px] items-center justify-center mb-[8px]">
            <button onClick={back} className="text-white back" ><FaStepBackward /></button>
            <button onClick={handleClick} className="text-[16px] p-[8px] bg-[#00ADEF] text-white rounded-[99px] inline-flex button-click">
                <div className="button-play"><FaPlay /></div>
                <div className="button-pause hidden"><FaPause /></div>
            </button>
            <button  onClick={next} className="text-white"><FaStepForward /></button>
            </div>
        </>
    )
}