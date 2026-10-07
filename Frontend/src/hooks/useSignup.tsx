import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import type { AuthUser, SignupResponse } from "../assets/types/AuthUser"

export const useSignup = ()=>{

    const { setEmail, setPassword, error, setError, successMessage, setSuccessMessage, isLoading, setIsLoading, updateAuthUser } = useAuthContext(),
          navigate = useNavigate()

    const signUp = async(email: string, password: string) =>{

        setError(null)

        setSuccessMessage(null)

        setIsLoading(true)

        try{

            if(!password || !email){

                setError('Password and email are required')

                return

            }

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/register`, {

                method: "POST",
                headers:{ "Content-Type": "application/json" },
                credentials: "include",                
                body: JSON.stringify({ email, password })

            }),
                  data: SignupResponse = await response.json()

            if(!response.ok){

                setError(data.message ?? 'Unable to create your account. Please try again.')

                return

            }

            if(!data.email || !data.token){

                throw new Error('The server returned an invalid registration response.')

            }

            const user: AuthUser ={

                email: data.email,
                token: data.token

            }

            updateAuthUser(user)

            setEmail(user.email)

            setPassword('')

            setSuccessMessage('Your account has been created successfully.')

            setTimeout(()=>{

                navigate("/")
            
            }, 5000)

        }catch(error){

            setError(error instanceof Error ? error.message : 'Unable to create your account. Please try again.')

        }finally{

            setIsLoading(false)

        }

    }

    return { signUp, successMessage, error, isLoading }

}
