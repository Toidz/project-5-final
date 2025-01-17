"use client"
import { FaHouse } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authFirebase } from "@/app/db";
export const Left = ()=>{
    const [isLogin, setIsLogin] = useState<boolean>();

    useEffect(() => {
      onAuthStateChanged(authFirebase, (user) => {
        if (user) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      });
    }, []);
    const menu = [
        {
            icon: <FaHouse />,
            title:'Trang Chủ',
            href:'/'
        },
        {
            icon:<FaMusic />,
            title:'Danh Mục Bài Hát',
            href:'/category'
        },
        {
            icon:<FaPodcast />,
            title:'Ca sĩ',
            href:'/singer'
        },
        {
            icon:<FaHeart />,
            title:'Bài Hát Yêu Thích',
            href:'/wishlist',
            isLogin: true
        },
        {
            icon:<FaSignOutAlt />,
            title:'Đăng Xuất',
            href:'/logout',
            isLogin: true
        },
        {
            icon:<FaUser />,
            title:'Đăng Nhập',
            href:'/login',
            isLogin: false
        },
        {
            icon:<FaUserPlus />,
            title:'Đăng Ký',
            href:'/register',
                isLogin: false
        },
    ]
    const pathname = usePathname();
    console.log(pathname);
    return(
        <>
            <div className="bg-[#212121] w-[280px] h-[100vh] sticky top-0 z-100">
                <div className="bg-[#1C1C1C] py-[25px] pl-[20px]">
                    <img src="/Logo.svg" alt="logo" className="h-[42px] w-auto"></img>
                </div>
                <nav className="pl-[20px] mt-[34px]">
                    <ul className="flex flex-col gap-[20px] mt-[20px]">
                        {menu.map((item,index) => (
                            (item.isLogin === undefined || item.isLogin === isLogin) && (
                            <li key={index} className="text-white">
                                <Link href={item.href} className={"flex gap-[20px] hover:text-[#00ADEF] " + (pathname===item.href ? "text-[#00ADEF]":"text-white")}>
                                    <span className="text-[28px] h-[23px] w-[23px]">{item.icon}</span>
                                    <span className="font-[700]">{item.title}</span>
                                </Link>
                            </li>
                        )))}
                    </ul>
                </nav>
            </div>
        </>
    )
}
