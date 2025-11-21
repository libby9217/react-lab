import './card.css';
// props: 부모가 자식에게 전달(객체로)
const Card = ({file, title})=>{
    return(
        <div className="card">
            <div className="img-wrap">
                <img src={`./images/kakao_img_0${file}.png`} alt={`카드이미지0${file}`} />
                <h2>{title}</h2>
            </div>
        </div>
    ); 
}
export default Card;