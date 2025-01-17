import { Metadata } from "next";
import { FormLogin } from "./FormLogin";
export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Nghe nhạc",
};
export default function Login() {
  
  return (
   <>
    <div className="mt-[60px] text-center w-[500px] mx-auto">
      <div className="font-[700] text-[24px] text-[#EFEEE0] mb-[20px]">Đăng Nhập Tài Khoản</div>
      <FormLogin />
    </div>
   </>
  );
}
