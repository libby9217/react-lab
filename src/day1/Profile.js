const Profile = ({img, name, job})=>{
    return (
        <div>
            <img src={`./images/img-0${img}.png`} alt="프로필01"></img>
            <h3>{name}</h3>
            <p>{job}</p>
        </div>
    );
};

export default Profile;