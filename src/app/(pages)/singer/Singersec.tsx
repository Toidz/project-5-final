"use client";
import { Title } from "@/app/components/title/Title";
import { onValue, ref } from "firebase/database";
import { db } from "@/app/db";
import { Detailsinger } from "@/app/components/detail/Detailsinger";
import { useEffect, useState } from "react";
export default function Singersec() {
  const [singer,setSinger] = useState<any[]>([]);
  useEffect(()=>{
  const arraySinger : any[]= [];
  const getSinger = ref(db, 'singers');
  onValue(getSinger, (items) => {
    items.forEach((item)=>{
      const data = item.val();
      const key = item.key;
      if(arraySinger.length<5)
      {
        arraySinger.push(
          {
            id:key,
            desc:data.description,
            img:data.image,
            title:data.title
          }
        )
        setSinger([...arraySinger]);
      }
    })
  });
  },[])
  return (
   <>
    <div className="mt-[30px]">
      <Title title={"Danh Mục Ca Sĩ"}/>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-[20px] mt-[20px]">
        {singer.map((item)=>(
         <Detailsinger title={item.title} img={item.img} desc={item.desc} id={item.id}/>
        ))}
      </div>
    </div>
   </>
  );
}
