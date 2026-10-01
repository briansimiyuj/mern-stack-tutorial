import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

const RegisterForm: React.FC = ()=>{

    const { email, setEmail, password, setPassword } = useAuthContext(),
          [notice, setNotice] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{

        e.preventDefault()

        setNotice('The registration form is ready. Account creation will be connected later.')

    }

    return(

        <form
            className="auth-form"
            onSubmit={handleSubmit}
        >

            <label htmlFor="email">Email</label>

            <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={e =>{
                    setEmail(e.target.value)
                    setNotice(null)
                }}
                required
            />

            <label htmlFor="password">Password</label>

            <input
                id="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={e =>{
                    setPassword(e.target.value)
                    setNotice(null)
                }}
                required
            />

            <p className="auth-hint">Use a strong password with uppercase and lowercase letters, a number, and a symbol.</p>

            <button type="submit">Register</button>

            {

                notice &&(

                    <p
                        className="auth-notice"
                        role="status"
                    >{notice}</p>

                )

            }

        </form>

    )

}

export default RegisterForm
