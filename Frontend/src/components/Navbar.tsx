import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import { useSignout } from "../hooks/useSignout"

const Navbar: React.FC = ()=>{

    const { isAuth, authUser } = useAuthContext(),
          { signOut } = useSignout()

    return(

        <header>

            <div className="container">

                <Link to="/">
                
                    <h1>Workout Tracker</h1>
            
                </Link>

                {
                
                    isAuth ?(

                        <div className="auth-info">

                            <p>{authUser?.email}</p>
                
                            <button
                                className="signout-button"
                                onClick={signOut}
                                type="button"
                            >Sign Out</button>

                        </div>
                
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