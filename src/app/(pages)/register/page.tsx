import { Metadata } from "next";
import { FormRegister } from "./FormRegister";
export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Nghe nhạc",
};
export default function Register() {
  return (
   <>
    <div className="mt-[60px] text-center sm:w-[500px] w-auto sm:mx-auto">
      <div className="font-[700] sm:text-[24px] text-[20px] text-[#EFEEE0] mb-[20px]">Đăng Ký Tài Khoản</div>
      <FormRegister />
    </div>
   </>
  );
}
