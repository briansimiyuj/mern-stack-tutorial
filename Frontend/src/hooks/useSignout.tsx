import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

export const useSignout = ()=>{

    const { updateAuthUser, setEmail, setPassword, setError, setSuccessMessage } = useAuthContext(),
          navigate = useNavigate()

    const signOut = () =>{

        updateAuthUser(null)

        setEmail('')

        setPassword('')

        setError(null)

        setSuccessMessage('You have signed out.')

        navigate("/signin")

    }

    return { signOut }

}
