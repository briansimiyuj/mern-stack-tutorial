import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import { useSignin } from "../hooks/useSignin"

const SignInForm: React.FC = ()=>{

    const { email, setEmail, password, setPassword, error, successMessage, isLoading } = useAuthContext(),
          { signIn } = useSignin()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{

        e.preventDefault()

        signIn(email, password)

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

            <button
                type="submit"
                disabled={isLoading}
            >{isLoading ? 'Signing in...' : 'Sign In'}</button>

            {

                error &&(

                    <div
                        className="error"
                        role="alert"
                    >{error}</div>

                )

            }

            {

                successMessage &&(

                    <p
                        className="auth-notice"
                        role="status"
                    >{successMessage}</p>

                )

            }

            <p className="auth-notice">
                
                Don't have an account? <Link to="/register">Create one</Link>
            
            </p>

        </form>

    )

}

export default SignInForm
