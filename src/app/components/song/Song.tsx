import Link from "next/link";
import { ButtonLike } from "../button/ButtonLike";
import { ButtonPlay } from "../button/ButtonPlay";
export const Song =(props : {item:any})=>{
    const {item}= props;

    return(
        <div className="flex items-center bg-[#212121] rounded-[15px] p-[10px]" id={item.id}>
            <Link className="w-[76px] h-[76px] aspect-square" href={`song/${item.id}`}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-[10px]"></img>
            </Link>
            <div className="ml-[12px] flex-1">
                <div className="text-[15px] text-white font-[700]">{item.title}</div>
                <div className="text-[12px] text-[#FFFFFF70] font-[400]">{item.singer}</div>
                <div className="text-[12px] text-[#FFFFFF] font-[100]"> {item.listen.toLocaleString()} lượt nghe</div>
            </div>
            <div>
                <ButtonPlay id={item.id} item={item}/>
                <ButtonLike id={item.id} statuslike={item.statuslike} />
            </div>
        </div>     
    )
}