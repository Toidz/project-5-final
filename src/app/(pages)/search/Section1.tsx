"use client";
import { CategorySong } from "@/app/components/categorysong/CategorySong";
import { Title } from "@/app/components/title/Title";
import { db } from "@/app/db";
import { onValue, ref } from "firebase/database";
import {useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

export const Section1 =()=>{
    const [songs, setSongs] = useState <any[]>([]); 
    const searchParams = useSearchParams();
    const keyword = searchParams.get("keyword") || "" ;
    useEffect(()=>{
        const array:any[] = [];
        const getsong = ref(db, 'songs/');
        onValue(getsong, (items) => {
            items.forEach(itemSong => {
                const dataSong = itemSong.val();
                const cleanTitle = dataSong.title.trim().toLowerCase();
                const cleanKeyword = keyword.trim().toLowerCase();
                if(dataSong.title && cleanTitle.includes(cleanKeyword) && dataSong.singerId[0]>0) 
                {
                    const getSinger = ref(db, `singers/${dataSong.singerId[0]}`);
                    onValue(getSinger, (item) => {
                    const dataSinger = item.val();
                    array.push(
                    {
                        keysong:itemSong.key,
                        title:dataSong.title,
                        img:dataSong.image,
                        singer:dataSinger.title,
                        statuslike:dataSong.like,
                        audio:dataSong.audio
                    }
                    ); 
                })
                }
            });
        });
        setSongs([...array]); 
    },[keyword]);
    console.log(songs);
    return(
        <>
        {
        songs.length > 0 ? songs.map((item,index)=>(
            <CategorySong key={index} item={item}/>
        )): 
        <Title title={"Không Tìm Thấy Bài Hát!"}/>
        }
        </>
    );
}
