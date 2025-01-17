import { Metadata } from "next";
import { Title } from "@/app/components/title/Title";;
import { CategorySong } from "@/app/components/categorysong/CategorySong";
import { onValue, ref } from "firebase/database";
import { db } from "@/app/db";
import { Detailsong } from "@/app/components/detail/Detailsong";
export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Nghe nhạc",
};
export default async function Song(props:any) {
  const {id} = await props.params;
  const detailtilte :any ={img:null,title:null,singer:null,lyric:null,category:null}
  const arraySongtoo:any[] =[];
  const getSong = ref(db, `songs/${id}`);
  onValue(getSong, (item) => {
      const data = item.val();
      const key = item.key;
      detailtilte.id=key;
      detailtilte.img=data.image;
      detailtilte.title=data.title;
      const getsinger = ref(db, `singers/${data.singerId[0]}`);
      onValue(getsinger, (item) => {
        detailtilte.singer=item.val().title;
      })
      detailtilte.lyric=data.lyric;
      detailtilte.category = data.categoryId;
      const getSongtoo = ref(db, `songs`);
      onValue(getSongtoo, (items) => {
        items.forEach((item)=>{
          const dataSongtoo = item.val();
          const keytoo=item.key;
          if(dataSongtoo.categoryId==detailtilte.category)
          {
            const singerIdtoo= dataSongtoo.singerId[0];
            const getSongtoosinger = ref(db, `singers/${singerIdtoo}`);
            onValue(getSongtoosinger, (item) => {
              const datasongtoosinger = item.val();
              arraySongtoo.push(
                {
                  keysong:keytoo,
                  img:dataSongtoo.image,
                  title:dataSongtoo.title,
                  singer:datasongtoosinger.title,
                  statuslike:dataSongtoo.like,
                  audio:dataSongtoo.audio
                }
              )
            })
          }
        })
      })
  });
  return (
   <>
    <Detailsong img={detailtilte.img} title={detailtilte.title} singer={detailtilte.singer} />
    <div className="mt-[30px] mb-[20px]">
      <Title title={"Lời Bài Hát"}/>
    </div>
    <div className="bg-[#212121] p-[20px] rounded-[15px]">
      <div className="w-[311px] text-[#FFFFFF] font-[500] text-[14px]">
        {detailtilte.lyric}
      </div>
    </div>
    <div className="mt-[30px] mb-[20px]">
      <Title title="Bài Hát Cùng Danh Mục"/>
    </div>
    <div className="flex flex-col gap-[10px]">
      {arraySongtoo.map((item,index)=>(
        <CategorySong key={index} item={item}/>
      ))}
    </div>
   </>
  );
}
