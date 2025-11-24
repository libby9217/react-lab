import { useState } from "react";

const Toggle = ()=>{
    const [isShow, setIsShow] = useState(true);
    return (
        <div className="toggle">
            <button 
            onClick={()=>{setIsShow(!isShow)}}
            >{isShow ? '내용숨기기' : '내용보이기'}</button>
            {isShow && <p>오늘도 행복하고 건강한 하루😻</p>}
        </div>
    )
};
export default Toggle;