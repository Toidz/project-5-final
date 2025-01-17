import { Metadata } from "next";
import { Title } from "@/app/components/title/Title";
import { CategorySong } from "@/app/components/categorysong/CategorySong";
import { onValue, ref } from "firebase/database";
import { db } from "@/app/db";
import { Detailsong } from "@/app/components/detail/Detailsong";
export const metadata: Metadata = {
  title: "Chi tiết danh mục",
  description: "Nghe nhạc",
};
export default async function CategoryDetail(props:any) {
  const {id} = await props.params;
  const detail={img:null,title:null,desc:null};
  const arraySong:any[] =[];
  const getCategory = ref(db, `categories/${id}`);
  onValue(getCategory, (item) => {
        const data = item.val();
        const key = item.key;
        detail.img=data.image;
        detail.title=data.title;
        detail.desc=data.description;
        const getSong = ref(db, `songs`);
        onValue(getSong, (items) => {
        items.forEach((item)=>{
        const keysong = item.key;
        const data = item.val();
        if(data.categoryId==key)
        {
          arraySong.push(
          {
            keysong:keysong,
            title:data.title,
            img:data.image,
            singer:detail.title,
            statuslike:data.like,
            audio: data.audio
          }
          )
        }
        })
    })
    })
  return (
   <>
    <Detailsong img={detail.img} title={detail.title} singer={detail.desc}/>
    <div className="mt-[30px] mb-[20px]">
      <Title title="Danh Sách Bài hát"/>
    </div>
    <div className="flex flex-col gap-[10px] list-song">
      {arraySong.map((item,index)=>(
        <CategorySong  key={index} item={item}/>
      ))}
    </div>
   </>
  );
}
