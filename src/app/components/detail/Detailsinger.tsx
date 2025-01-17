import Link from "next/link"

export const Detailsinger = (props:{img:any, title:any, desc:any, id:any})=>{
    const {img} = props;
    const {title}= props;
    const {desc}= props;
    const {id} = props;
    return(
        <>
            <div className="">
                <Link href={`/singer/${id}`}>
                    <img src={img} className="aspect-square w-[180px] rounded-[15px]"></img>
                </Link>
                <div className="font-[700] text-[14px] text-[#FFFFFF] mt-[10px]">{title}</div>
                <div className="font-[400] text-[12px] text-[#FFFFFF80] mt-[10px] overflow-hidden whitespace-nowrap text-ellipsis">{desc}</div>
            </div>
        </>
    )
}