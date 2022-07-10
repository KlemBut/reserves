import { useState } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import {login} from '../features/user'
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
const Login = () => {
const dispatch = useDispatch()
const userArr = useSelector((state) => state.user.value)
console.log(userArr);
const [getLogin, setLogin] = useState()
const [getError, setError] = useState()
const nav = useNavigate()

function loggedUser (obj) {
    dispatch (login(obj))
}
function log (emRef, pasRef) {
   userArr.user.map ((x) => {
    if(x.email === emRef.current.value && x.password === pasRef.current.value){
        console.log(x);
        loggedUser(x);
        nav("/profile")
    } 
    else { 
        setError("No such user please register")
    }
   })
}
    return(
        <div>
            <LoginForm setLogin={setLogin} logger={log}></LoginForm>
            <span>{getError}</span>
        </div>
        
    )
}

export default Login