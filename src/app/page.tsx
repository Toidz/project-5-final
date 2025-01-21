import { Song } from "./components/song/Song";
import { Metadata } from "next";
import { Title } from "./components/title/Title";
import { db} from "./db";
import { ref, onValue} from "firebase/database";
import { Detailcategory} from "./components/detail/Detailcategory";
import { Detailsinger } from "./components/detail/Detailsinger";
export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Nghe nhạc",
};
export default function Home() {
  //section-1
  const array: any[] = [];
  const listSong = ref(db, 'songs');
  onValue(listSong,(snapshot) => {
    snapshot.forEach((item) => {
      console.log(1);
      const data =item.val();
      const key = item.key;
      if(array.length <3)
      {
        const singer = ref(db, 'singers/' + data.singerId[0]);
        onValue(singer,(snapshotsinger) => {
          const datasinger =snapshotsinger.val();
          array.push({
            id:key,
            img: data.image,
            title: data.title,
            singer: datasinger.title,
            listen: data.listen,
            statuslike:data.like,
            audio:data.audio
          });
        });
      }
    });
  });
  console.log(array);
  //section-2
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
  //section-3
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
    <div className="flex gap-[20px]">
      <div className="bg-[url('/right-bg.png')] bg-cover rounded-[15px] flex items-center w-[543px]">
        <div className="mr-[35px] ml-[30px] flex-1">
          <p className="text-[32px] text-[white] font-[700]">Nhạc EDM</p>
          <p className="text-[14px] text-[white] font-[500]">Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại 
          của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ</p>
        </div>
        <div className="mt-[44px] mr-[24px] w-[215px]">
          <img alt="image" src="/right-image.png" className="w-full h-auto"></img>
        </div>
      </div>
      <div className="flex-1">
        <Title title={"Nghe Nhiều"}/>
        <div className="flex flex-col gap-y-[20px] mt-[20px]">
          {
            array.map((item,index)=>(
              <Song item={item} key={index}/>
            ))
          }
        </div>
      </div>
    </div>

    <div className="mt-[30px]">
      <Title title={"Danh Mục Nổi Bật"}/>
      <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
       {
       arrayCategory.map((item,index:any)=>(
        <div id={index}>
          <Detailcategory title={item.title} img={item.img} desc={item.desc} id={item.id}/>
        </div>
       ))}
      </div>
    </div>

    <div className="mt-[30px]">
      <Title title={"Ca Sĩ Nổi Bật"}/>
      <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
        {arraySinger.map((item)=>(
          <Detailsinger title={item.title} img={item.img} desc={item.desc} id={item.id}/>
        ))}
      </div>
    </div>
   </>
  );
}
