
import { Title } from "@/app/components/title/Title";
import { Metadata } from "next";
import { Section1 } from "./Section1";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Nghe nhạc",
};
export default async function SearchResult() {
  return (
   <>
    <Title title={"Kết Quả Tìm Kiếm"}/>
    <div className="flex flex-col gap-[10px] mt-[10px]">
      <Suspense>
        <Section1/>
      </Suspense>
    </div>
   </>
  );
}
