import "./kakao.css";
const Kakao = ({img, head, title, text})=>{
    return (
        <div className="card">
            <ul className="img_wrap">
                <img src={`./images/kakao_img_0${img}.png`}></img>
                <h2>{head}</h2>
            </ul>
            <ul className="txt">
                <h3>{title}</h3>
                <p>{text}</p>
            </ul>
        </div>
    );
};

export default Kakao;