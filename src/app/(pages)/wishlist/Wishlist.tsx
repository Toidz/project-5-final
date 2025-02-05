"use client";
import { CategorySong } from "@/app/components/categorysong/CategorySong";
import { db } from "@/app/db";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function WishList() {
  const [song,setSong] = useState<any[]>([]);
  useEffect(()=>{
    const arraySong:any[] =[];
    const getlikesong = ref(db, `songs`);
    onValue(getlikesong, (items) => {
      arraySong.length = 0; 
       items.forEach(item => {
         const data = item.val();
         const key = item.key;
         if(data.like=="true" && data.singerId[0] > 0)
         {
          const getsinger = ref(db, `singers/${data.singerId[0]}`);
          onValue(getsinger, (item) => {
          const datasinger = item.val();
          arraySong.push(
          {
            keysong:key,
            title:data.title,
            img:data.image,
            singer:datasinger.title,
            statuslike:data.like,
            audio:data.audio
          }
          )
          setSong([...arraySong]);
          })
         }
       });
    })
  },[])
  return (
   <>
    <div className="flex flex-col gap-[10px]">
      {song.map((item,index)=>(
        <CategorySong item={item} key={index}/>
      ))}
    </div>
   </>
  );
}
