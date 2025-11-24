import { useState } from "react";

const IsLike = ()=>{
    const [isToggle, setIsToggle] = useState(false);
    return (
        <div className="like">
            <p>현재 좋아요: <span>{isToggle ? 'ON' : 'OFF'}</span></p>
            {isToggle && <p>💓</p>}
            <button onClick={()=>{setIsToggle(!isToggle)}}>좋아요 토글</button>
        </div>
    )
}
export default IsLike;