import './card.css';
import number1Img from '../assets/kakao_img_01.png';
// props: 부모가 자식에게 전달(객체로)
const Card = ({file, title})=>{
    const PUBLIC = process.env.PUBLIC_URL;
    return(
        <div className="card">
            <div className="img-wrap">
                <img src={`${PUBLIC}/images/kakao_img_0${file}.png`} alt={`카드이미지0${file}`} />
                <h2>{title}</h2>
                {/* <img src={number1Img} alt='1번이미지' /> */}
            </div>
        </div>
    ); 
}
export default Card;