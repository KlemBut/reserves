import { useRef } from "react"

const LoginForm = ({logger} ) => {
    const emailRef  = useRef()
    const passRef = useRef()
    return(
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" ref={emailRef}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" ref={passRef}/>
            </div>
            <button onClick={() => logger(emailRef, passRef)}>Login</button>
        </div>
    )
}

export default LoginForm