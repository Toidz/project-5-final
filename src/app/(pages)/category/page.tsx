import { Metadata } from "next";
import Categorysec from "./Categorysec";
export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Nghe nhạc",
};
export default function Category() {
 
  return (
   <>
     <Categorysec />
   </>
  );
}
