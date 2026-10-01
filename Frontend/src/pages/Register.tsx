import RegisterForm from "../components/RegisterForm"

const Register: React.FC = ()=>{

    return(

        <main className="register-page">

            <section className="register-intro">

                <h2>Create an account</h2>

                <p>Register to start tracking your workouts.</p>

            </section>

            <RegisterForm/>

        </main>

    )

}

export default Register
