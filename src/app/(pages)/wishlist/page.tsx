
import { Metadata } from "next";
import Wishlist from "./Wishlist";
export const metadata: Metadata = {
  title: "Bài hát yêu thích",
  description: "Nghe nhạc",
};
export default function WishList() {
   
  return (
   <>
     <Wishlist />
   </>
  );
}
