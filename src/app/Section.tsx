"use client";
import { Song } from "./components/song/Song";
import { Title } from "./components/title/Title";
import { db} from "./db";
import { ref, onValue} from "firebase/database";
import { Detailcategory} from "./components/detail/Detailcategory";
import { Detailsinger } from "./components/detail/Detailsinger";
import { useEffect, useState } from "react";
export const Section = ()=>{
      const [songs, setSongs] = useState<any[]>([]);
      const [categories, setCategories] = useState<any[]>([]);
      const [singers, setSingers] = useState<any[]>([]);
      useEffect(() => {
        // Section 1
        const listSong = ref(db, "songs");
        onValue(listSong, (snapshot) => {
          const tempSongs: any[] = [];
          snapshot.forEach((item) => {
            const data = item.val();
            const key = item.key;
              const singerRef = ref(db, "singers/" + data.singerId[0]);
              onValue(singerRef, (singerSnapshot) => {
                const singerData = singerSnapshot.val();
                if (tempSongs.length < 3) {
                  tempSongs.push({
                  id: key,
                  img: data.image,
                  title: data.title,
                  singer: singerData?.title,
                  listen: data.listen,
                  statuslike: data.like,
                  audio: data.audio,
                });
                setSongs([...tempSongs]);
                }
              });
          });
        });
     
        // Section 2
        const getCategory = ref(db, "categories");
        onValue(getCategory, (snapshot) => {
          const tempCategories: any[] = [];
          snapshot.forEach((item) => {
            const data = item.val();
            const key = item.key;
            if (tempCategories.length < 5) {
              tempCategories.push({
                id: key,
                desc: data.description,
                img: data.image,
                title: data.title,
              });
            }
          });
          setCategories([...tempCategories]); 
        });
    
        // Section 3
        const getSinger = ref(db, "singers");
        onValue(getSinger, (snapshot) => {
          const tempSingers: any[] = [];
          snapshot.forEach((item) => {
            const data = item.val();
            const key = item.key;
            if (tempSingers.length < 5) {
              tempSingers.push({
                id: key,
                desc: data.description,
                img: data.image,
                title: data.title,
              });
            }
          });
          setSingers([...tempSingers]); 
        });
    }, []);
    console.log(songs);
    return(
        <>
        <div className="flex gap-[20px] md:flex-nowrap flex-wrap md:mt-[0px] mt-[20px]">
            <div className="bg-[url('/right-bg.png')] bg-cover rounded-[15px] flex items-center xl:w-[543px] md:w-[400px] w-[full]">
                <div className="mr-[35px] ml-[30px] flex-1">
                    <p className="sm:text-[32px] text-[20px] text-[white] font-[700] ">Nhạc EDM</p>
                    <p className="sm:text-[14px] text-[12px] text-[white] font-[500]">Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại 
                    của thể loại Top 100 Nhạc Electronic</p>
                </div>
                <div className="mt-[44px] mr-[24px] xl:w-[215px] md:w-[150px] sm:w-[140px] w-[100px]">
                    <img alt="image" src="/right-image.png" className="w-full h-auto"></img>
                </div>
            </div>
            <div className="flex-1">
                <Title title={"Nghe Nhiều"}/>
                <div className="flex flex-col gap-y-[20px] mt-[20px]">
                    {
                    songs.map((item,index)=>(
                        <Song item={item} key={index}/>
                    ))
                    }
                </div>
            </div>
        </div>

        <div className="mt-[30px]">
            <Title title={"Danh Mục Nổi Bật"}/>
            <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[20px] mt-[20px]">
                {
                categories.map((item,index)=>(
                    <Detailcategory key={index} title={item.title} img={item.img} desc={item.desc} id={item.id}/>
                ))}
            </div>
        </div>

        <div className="mt-[30px]">
            <Title title={"Ca Sĩ Nổi Bật"}/>
            <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[20px] mt-[20px]">
                {singers.map((item,index)=>(
                    <Detailsinger title={item.title} img={item.img} desc={item.desc} id={item.id} key={index}/>
                ))}
            </div>
        </div>
        </>
    )
}