import { FaVolumeHigh } from "react-icons/fa6"

export const Playvolume =() =>{
    const handleChange = (event:any)=>{
        const bottom:any = document.querySelector(".bottom");
        if(bottom)
        {
            const currentVolume = bottom.querySelector(".current-volume");
            const value = parseFloat(event.target.value);
            currentVolume.style.width =`${value}%`;
            const innerAudio= bottom.querySelector(".inner-audio");
            innerAudio.volume = value/100;
        }
    }
    return(
        <>
            <button className="text-white text-[16px] mt-[6px]"><FaVolumeHigh /></button>
            <div className="relative ml-[12px]">
                <div className="w-[80%] h-[3px] bg-[#00ADEF] absolute top-[14px] left-[0] current-volume"></div>
                <input type="range" min={0} max={100} defaultValue={80} 
                className="w-full h-[3px] rounded-[50px] bg-[#FFFFFF0A] appearance-none cursor-pointer range-sm total-volume"
                onChange={handleChange}
                />
            </div>
        </>
    )
}
