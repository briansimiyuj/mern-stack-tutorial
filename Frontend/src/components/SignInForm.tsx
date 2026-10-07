import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

const SignInForm: React.FC = ()=>{

    const { email, setEmail, password, setPassword } = useAuthContext()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{

        e.preventDefault()

    }

    return(

        <form
            className="auth-form"
            onSubmit={handleSubmit}
        >

            <label htmlFor="signin-email">Email</label>

            <input
                id="signin-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />

            <label htmlFor="signin-password">Password</label>

            <input
                id="signin-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />

            <button type="submit">Sign In</button>

            <p className="auth-notice">
                
                Don't have an account? <Link to="/register">Create one</Link>
            
            </p>

        </form>

    )

}

export default SignInForm
