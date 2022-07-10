import { useSelector, useDispatch } from "react-redux"
import ProfileCard from "../components/ProfileCard"
import { updatePic } from "../features/user"
import { Link } from "react-router-dom"
const Profile = () => {
    const users = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const indx = users.user.findIndex(x=> x.email === users.loggedIn.email)

    function picUpdater (url, num) {
        dispatch(updatePic(
            {
                photoUrl: url,
                index: num
            }
        ))
        
    }
    return(
        <div>
            <ProfileCard mainUser={users} picUpd={picUpdater} indx={indx}></ProfileCard>
            <Link to="/reservation"><button>To Reservation</button></Link>
        </div>
        
    )
}

export default Profile