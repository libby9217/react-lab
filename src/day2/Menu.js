import { useState } from "react";

const Menu = ()=>{
    const [isShow, setIsShow] = useState(true);
    return (
        <>
            <div className="menubar">
                <h4>if(kakao)25</h4>
                <ul
                onClick={()=>{setIsShow(!isShow)}}>
                    {isShow && <li></li>}
                    {isShow && <li></li>}
                </ul>
            </div>
            <div className="menu">
                <div>
                    <h4>if(kakao)25</h4>
                    <ul
                    onClick={()=>{setIsShow(!isShow)}}>
                        {isShow && <li></li>}
                        {isShow && <li></li>}
                    </ul>
                </div>
                <ul>
                    <div className="top">
                        <li>SESSION</li>
                        <li>INFO</li>
                        <li>FAQ</li>
                    </div>
                    <div className="bottom">
                        <li>LOGIN</li>
                    </div>
                </ul>
            </div>
        </>
    );
}
export default Menu;