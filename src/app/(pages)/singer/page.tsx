import { Metadata } from "next";
import Singersec from "./Singersec";
export const metadata: Metadata = {
  title: "Danh mục ca sĩ",
  description: "Nghe nhạc",
};
export default function Singer() {
  
  return (
   <>
     <Singersec />
   </>
  );
}
