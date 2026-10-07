import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import type { AuthUser, SignupResponse } from "../assets/types/AuthUser"

export const useSignin = ()=>{

    const { setEmail, setPassword, setError, setSuccessMessage, setIsLoading, updateAuthUser } = useAuthContext(),
          navigate = useNavigate()

    const signIn = async(email: string, password: string) =>{

        setIsLoading(true)

        setError(null)

        setSuccessMessage(null)

        try{

            if(!email || !password){

                setError('Email and password are required')

                return

            }

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {

                method: "POST",
                headers:{ "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password })

            }),
                  data: SignupResponse = await response.json()

            if(!response.ok){

                setError(data.message ?? 'Unable to sign in. Please check your details and try again.')

                return

            }

            if(!data.email || !data.token){

                throw new Error('The server returned an invalid sign-in response.')

            }

            const user: AuthUser ={

                email: data.email,
                token: data.token

            }

            updateAuthUser(user)

            setEmail(user.email)

            setPassword('')

            setSuccessMessage('You have signed in successfully.')

            setTimeout(()=>{

                navigate("/")

            }, 1500)

        }catch(error){

            setError(error instanceof Error ? error.message : 'Unable to sign in. Please try again.')

        }finally{

            setIsLoading(false)

        }

    }

    return { signIn }

}
