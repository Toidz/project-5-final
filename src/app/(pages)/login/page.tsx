import { Metadata } from "next";
import { FormLogin } from "./FormLogin";
export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Nghe nhạc",
};
export default function Login() {
  
  return (
   <>
    <div className="mt-[60px] text-center sm:w-[500px] sm:mx-auto ">
      <div className="font-[700] sm:text-[24px] text-[20px] text-[#EFEEE0] mb-[20px]">Đăng Nhập Tài Khoản</div>
      <FormLogin />
    </div>
   </>
  );
}
