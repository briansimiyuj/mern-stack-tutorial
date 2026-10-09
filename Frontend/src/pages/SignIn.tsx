import { Navigate } from "react-router-dom"
import SignInForm from "../components/SignInForm"
import { useAuthContext } from "../context/AuthContext"

const SignIn: React.FC = ()=>{

    const { isAuth, isAuthChecking } = useAuthContext()

    if(isAuthChecking){

        return(

            <p
                className="auth-check-message"
                role="status"
            >Checking your session...</p>

        )

    }

    if(isAuth){

        return <Navigate to="/" replace/>

    }

    return(

        <main className="signin-page">

            <section className="register-intro">

                <h2>Welcome back</h2>

                <p>Sign in to continue tracking your workouts.</p>

            </section>

            <SignInForm/>

        </main>

    )

}

export default SignIn
