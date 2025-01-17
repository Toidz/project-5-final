import { Metadata } from "next";
import { Title } from "@/app/components/title/Title";
import { onValue, ref } from "firebase/database";
import { db } from "@/app/db";
import { Detailcategory } from "@/app/components/detail/Detailcategory";
export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Nghe nhạc",
};
export default function Category() {
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
      }
    })
  });
  return (
   <>
    <div className="mt-[30px]">
      <Title title={"Danh Mục Nổi Bật"}/>
      <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
        {arrayCategory.map((item,index)=>(
         <Detailcategory key= {index} title={item.title} img={item.img} desc={item.desc} id={item.id}/>
        ))}
      </div>
    </div>
   </>
  );
}
