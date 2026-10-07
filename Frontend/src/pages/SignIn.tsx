import SignInForm from "../components/SignInForm"

const SignIn: React.FC = ()=>{

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
