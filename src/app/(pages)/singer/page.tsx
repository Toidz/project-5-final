import { Metadata } from "next";
import { Title } from "@/app/components/title/Title";
import { onValue, ref } from "firebase/database";
import { db } from "@/app/db";
import { Detailsinger } from "@/app/components/detail/Detailsinger";
export const metadata: Metadata = {
  title: "Danh mục ca sĩ",
  description: "Nghe nhạc",
};
export default function Category() {
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
      }
    })
  });
  return (
   <>
    <div className="mt-[30px]">
      <Title title={"Danh Mục Ca Sĩ"}/>
      <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
        {arraySinger.map((item)=>(
         <Detailsinger title={item.title} img={item.img} desc={item.desc} id={item.id}/>
        ))}
      </div>
    </div>
   </>
  );
}
