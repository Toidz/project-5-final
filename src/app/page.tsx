import { Metadata } from "next";
import { Section } from "./Section";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Nghe nhạc",
};
export default function Home() {
  return (
  <>
    <Section />
  </>
  );
}
