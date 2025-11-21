import "./props.css";
const Props = ({user, txt, idx})=>{
    // console.log(user);

    return (
        <div className="card">
            <img src={`./images/img-0${idx}.png`} alt="카드이미지01"></img>
            <h2>{user}</h2>
            <p>{txt}</p>
        </div>
    );
};
export default Props;