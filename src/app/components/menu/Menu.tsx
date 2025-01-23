import { IoMdMenu } from "react-icons/io"

export const Menu = ()=>{
    const handleClick = ()=>{
        const innerMenu = document.querySelector(".inner-menu");
        const innerNav = document.querySelector(".inner-nav");
        if (innerMenu) {
            innerMenu.classList.toggle("show");
        }
        if(innerNav){
            innerNav.classList.toggle("showNav");
        }
    }
    return(
        <>
            <button onClick={handleClick}>
                <IoMdMenu />
            </button>
        </>
    )
}