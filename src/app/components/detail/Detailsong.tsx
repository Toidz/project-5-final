export const Detailsong = (props : {img:any, title:any,singer:any}) =>{
    const {img}=props;
    const {title}=props;
    const {singer}=props;
    return(
        <div className="flex gap-[20px] items-center">
            <div className="w-[176px] rounded-[15px]">
                <img src={img} className="w-full h-auto object-cover rounded-[15px]" alt="image"></img>
            </div>
            <div className="py-[38px] flex-1">
                <div className="text-[#00ADEF] font-[700] text-[35px] mb-[10px]">{title}</div>
                <div className="text-[#EFEEE0] font-[400] text-[14px]">{singer}</div>
            </div>
        </div>
    )
}