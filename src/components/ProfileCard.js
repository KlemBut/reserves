import { useRef } from "react"

const ProfileCard = ({mainUser, picUpd, indx}) => {
    const urlRef = useRef()
    console.log(mainUser);
    return (
        <div>
            <img src={mainUser.loggedIn.pic} alt="" style={{width:"250px"}} />
            <h3>{mainUser.loggedIn.email}</h3>
            <input type="text" placeholder="pic url" ref={urlRef}/>
            <button onClick={() => picUpd(urlRef.current.value, indx)}>Change Pictures</button>
        </div>
    )
}

export default ProfileCard