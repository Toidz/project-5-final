import { CategorySong } from "@/app/components/categorysong/CategorySong";
import { db } from "@/app/db";
import { onValue, ref } from "firebase/database";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bài hát yêu thích",
  description: "Nghe nhạc",
};
export default function WishList() {
   const arraySong:any[] =[];
   const getlikesong = ref(db, `songs`);
   onValue(getlikesong, (items) => {
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
         })
        }
      });
   })
  return (
   <>
    <div className="flex flex-col gap-[10px]">
      {arraySong.map((item)=>(
        <CategorySong item={item}/>
      ))}
    </div>
   </>
  );
}
