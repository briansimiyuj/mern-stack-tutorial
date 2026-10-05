import { useAuthContext } from "../context/AuthContext"
import { useSignup } from "../hooks/useSignup"

const RegisterForm: React.FC = ()=>{

    const { email, setEmail, password, setPassword } = useAuthContext(),
          { signUp, successMessage, error, isLoading } = useSignup()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{

        e.preventDefault()

        signUp(email, password)

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
                onChange={e => setEmail(e.target.value)}
                required
            />

            <label htmlFor="password">Password</label>

            <input
                id="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />

            <p className="auth-hint">Use a strong password with uppercase and lowercase letters, a number, and a symbol.</p>

            <button
                type="submit"
                disabled={isLoading}
            >{isLoading ? 'Creating account...' : 'Register'}</button>

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

        </form>

    )

}

export default RegisterForm
