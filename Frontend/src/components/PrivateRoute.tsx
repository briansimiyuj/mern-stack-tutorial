import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

const PrivateRoute: React.FC = ()=>{

    const { isAuth, isAuthChecking } = useAuthContext()

    if(isAuthChecking){

        return(

            <p
                className="auth-check-message"
                role="status"
            >Checking your session...</p>

        )

    }

    if(!isAuth){

        return <Navigate to="/signin" replace/>

    }

    return <Outlet/>

}

export default PrivateRoute
