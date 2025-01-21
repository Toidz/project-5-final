import { useState, useEffect } from "react";
import { Song } from "./components/song/Song";
import { Metadata } from "next";
import { Title } from "./components/title/Title";
import { db } from "./db";
import { ref, onValue } from "firebase/database";
import { Detailcategory } from "./components/detail/Detailcategory";
import { Detailsinger } from "./components/detail/Detailsinger";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Nghe nhạc",
};

export default function Home() {
  const [songs, setSongs] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [singers, setSingers] = useState<any[]>([]);

  useEffect(() => {
    // Section 1: Lấy danh sách bài hát
    const listSong = ref(db, "songs");
    onValue(listSong, (snapshot) => {
      const tempSongs: any[] = [];
      snapshot.forEach((item) => {
        const data = item.val();
        const key = item.key;

        // Chỉ lấy 3 bài hát
        if (tempSongs.length < 3) {
          const singerRef = ref(db, "singers/" + data.singerId[0]);
          onValue(singerRef, (singerSnapshot) => {
            const singerData = singerSnapshot.val();
            tempSongs.push({
              id: key,
              img: data.image,
              title: data.title,
              singer: singerData?.title,
              listen: data.listen,
              statuslike: data.like,
              audio: data.audio,
            });
            setSongs([...tempSongs]); // Cập nhật state
          });
        }
      });
    });

    // Section 2: Lấy danh sách danh mục
    const getCategory = ref(db, "categories");
    onValue(getCategory, (snapshot) => {
      const tempCategories: any[] = [];
      snapshot.forEach((item) => {
        const data = item.val();
        const key = item.key;

        // Chỉ lấy 5 danh mục
        if (tempCategories.length < 5) {
          tempCategories.push({
            id: key,
            desc: data.description,
            img: data.image,
            title: data.title,
          });
        }
      });
      setCategories(tempCategories); // Cập nhật state
    });

    // Section 3: Lấy danh sách ca sĩ
    const getSinger = ref(db, "singers");
    onValue(getSinger, (snapshot) => {
      const tempSingers: any[] = [];
      snapshot.forEach((item) => {
        const data = item.val();
        const key = item.key;

        // Chỉ lấy 5 ca sĩ
        if (tempSingers.length < 5) {
          tempSingers.push({
            id: key,
            desc: data.description,
            img: data.image,
            title: data.title,
          });
        }
      });
      setSingers(tempSingers); // Cập nhật state
    });
  }, []);

  return (
    <>
      {/* Section 1: Nghe nhiều */}
      <div className="flex gap-[20px]">
        <div className="bg-[url('/right-bg.png')] bg-cover rounded-[15px] flex items-center w-[543px]">
          <div className="mr-[35px] ml-[30px] flex-1">
            <p className="text-[32px] text-[white] font-[700]">Nhạc EDM</p>
            <p className="text-[14px] text-[white] font-[500]">
              Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
              nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
            </p>
          </div>
          <div className="mt-[44px] mr-[24px] w-[215px]">
            <img alt="image" src="/right-image.png" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex-1">
          <Title title={"Nghe Nhiều"} />
          <div className="flex flex-col gap-y-[20px] mt-[20px]">
            {songs.map((item, index) => (
              <Song item={item} key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Danh mục nổi bật */}
      <div className="mt-[30px]">
        <Title title={"Danh Mục Nổi Bật"} />
        <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
          {categories.map((item, index) => (
            <Detailcategory
              key={index}
              title={item.title}
              img={item.img}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>

      {/* Section 3: Ca sĩ nổi bật */}
      <div className="mt-[30px]">
        <Title title={"Ca Sĩ Nổi Bật"} />
        <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
          {singers.map((item, index) => (
            <Detailsinger
              key={index}
              title={item.title}
              img={item.img}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
