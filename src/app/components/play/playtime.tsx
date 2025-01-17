export const Playtime = ()=>{
    const handleChange = (event:any)=>{
        const bottom:any = document.querySelector(".bottom");
        if(bottom)
        {
            const innerAudio= bottom.querySelector(".inner-audio");
            const value = parseFloat(event.target.value);
            innerAudio.currentTime = value;
        }
    }
    return(
        <div className="relative">
            <div className="h-[3px] bg-[#00ADEF] absolute top-[14px] left-[0] current-time"></div>
            <input type="range" min={0} max={0} defaultValue={0} 
            className="w-full h-[4px] rounded-[50px] bg-[#2A2A2A] range-sm appearance-none total-time"
            onChange={handleChange}
            />  
        </div>
    )
}