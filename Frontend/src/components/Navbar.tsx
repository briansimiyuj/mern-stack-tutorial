import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import { useSignout } from "../hooks/useSignout"

const Navbar: React.FC = ()=>{

    const { isAuth } = useAuthContext(),
          { signOut } = useSignout()

    return(

        <header>

            <div className="container">

                <Link to="/">
                
                    <h1>Workout Tracker</h1>
            
                </Link>

                {
                
                    isAuth ?(
                
                        <button
                            className="signout-button"
                            onClick={signOut}
                            type="button"
                        >Sign Out</button>
                
                    ):(
                
                        <div className="auth-links">

                            <Link to="/register">Register</Link>

                            <Link to="/signin">Sign In</Link>

                        </div>
                
                    )
                
                }

            </div>

        </header>

    )

}

export default Navbar