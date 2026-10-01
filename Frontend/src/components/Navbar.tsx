import { Link } from "react-router-dom"

const Navbar: React.FC = ()=>{

    return(

        <header>

            <div className="container">

                <Link to="/">
                
                    <h1>Workout Tracker</h1>
            
                </Link>

                <Link to="/register">Register</Link>

            </div>

        </header>

    )

}

export default Navbar