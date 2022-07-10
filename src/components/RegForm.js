import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const RegForm = ({addUser}) => {
    const emailRef = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()
    const [getError, setError] = useState("")
    const nav = useNavigate()
    function toLogin () {
        nav(`/`)
    }
    function validate () {
        if(!emailRef.current.value.includes("@") || !emailRef.current.value.includes(".") ){
            setError(`Email must include "@" and "."`)
            return 
        }
        if(pass1Ref.current.value.length < 4 || pass1Ref.current.value.length > 20){
            setError(`Password needs to be between 4 and 20 characters`)
            return 
        }
        if(pass1Ref.current.value !== pass2Ref.current.value){
            setError(`Passwords need to match`)
            return 
        }

        setError("succes")
        const oneUser = {
            email: emailRef.current.value,
            password: pass1Ref.current.value,
            id: Date.now(),
            pic: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
        }

        addUser(oneUser)
        toLogin()

        
    }
    return(
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" ref={emailRef}/>
            </div>
            <div>
                <label htmlFor="pass1">Password</label>
                <input type="password" name="pass1" ref={pass1Ref}/>
            </div>
            <div>
                <label htmlFor="pass2">Repeat password</label>
                <input type="password" name="pass2" ref={pass2Ref} />
            </div>
            <span>{getError}</span>
            <button onClick={validate}>Register</button>
        </div>
        
    )
}

export default RegForm