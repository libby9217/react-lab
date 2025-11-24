import { useState } from 'react';
const Like = ()=>{
    const [count, setCount] = useState(0);
        // const handleClick = ()=>{
        //     setCount(count+1);
        // };
    return (
        <div className="like">
            {/* <button onClick={handleClick}>👍🏻좋아요</button> */}
            <button onClick={()=>{setCount(count+1);}}>👍🏻좋아요</button>
            <span> {count}</span>
        </div>
    );
};
export default Like;