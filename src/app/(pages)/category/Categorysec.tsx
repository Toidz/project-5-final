"use client";
import { Title } from "@/app/components/title/Title";
import { onValue, ref } from "firebase/database";
import { db } from "@/app/db";
import { Detailcategory } from "@/app/components/detail/Detailcategory";
import { useEffect, useState } from "react";
export default function Categorysec() {
  const [cate, setCate] = useState<any[]>([]);
  useEffect(()=>{
  const arrayCategory : any[]= [];
  const getCategory = ref(db, 'categories');
  onValue(getCategory, (items) => {
    items.forEach((item)=>{
      const data = item.val();
      const key = item.key;
      if(arrayCategory.length<5)
      {
        arrayCategory.push(
          {
            id:key,
            desc:data.description,
            img:data.image,
            title:data.title
          }
        )
        setCate([...arrayCategory]);
      }
    })
  });
  },[])
 
  return (
   <>
    <div className="mt-[30px]">
      <Title title={"Danh Mục Nổi Bật"}/>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-[20px] mt-[20px]">
        {cate.map((item,index)=>(
         <Detailcategory key= {index} title={item.title} img={item.img} desc={item.desc} id={item.id}/>
        ))}
      </div>
    </div>
   </>
  );
}
