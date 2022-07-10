import RegForm from "../components/RegForm"
import {useDispatch} from 'react-redux'
import {addUser} from '../features/user'
const Register = () => {
    const dispatch = useDispatch()
    
    function importUser (obj) {
        dispatch(addUser(obj))
    }
    
    return(
        <div>
            <RegForm addUser={importUser}></RegForm>
        </div>
        
    )
}

export default Register