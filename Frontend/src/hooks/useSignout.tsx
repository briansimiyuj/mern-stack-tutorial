import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

export const useSignout = ()=>{

    const { updateAuthUser, setError, setSuccessMessage, setIsLoading } = useAuthContext(),
          navigate = useNavigate()

    const signOut = async() =>{

        setError(null)

        setSuccessMessage(null)

        setIsLoading(true)

        try{

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/logout`, {

                method: "POST",
                credentials: "include"

            }),
                  data = await response.json() as { message?: string }

            if(!response.ok){

                throw new Error(data.message ?? 'Unable to sign out. Please try again.')

            }

            updateAuthUser(null)

            setSuccessMessage(data.message ?? 'You have signed out.')

            navigate("/signin")

        }catch(error){

            setError(error instanceof Error ? error.message : 'Unable to sign out. Please try again.')

        }finally{

            setIsLoading(false)

        }

    }

    return { signOut }

}
