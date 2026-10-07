import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

const Navbar: React.FC = ()=>{

    const { isAuth } = useAuthContext()

    return(

        <header>

            <div className="container">

                <Link to="/">
                
                    <h1>Workout Tracker</h1>
            
                </Link>

                {
                
                    isAuth ?(
                
                        <Link to="/signout">Sign Out</Link>
                
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