import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

interface SignupResponse{

    email?: string
    message?: string

}

export const useSignup = ()=>{

    const { email, password, setEmail, setPassword, error, setError, successMessage, setSuccessMessage, isLoading, setIsLoading } = useAuthContext(),
          navigate = useNavigate()

    const handleSignup = async(e: React.SubmitEvent<HTMLFormElement>) =>{

        e.preventDefault()

        setError(null)

        setSuccessMessage(null)

        setIsLoading(true)

        try{

            const response = await fetch("http://localhost:4000/api/user/register", {

                method: "POST",
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })

            }),
                  data: SignupResponse = await response.json()

            if(!response.ok){

                setError(data.message ?? 'Unable to create your account. Please try again.')

                return

            }

            setEmail(data.email ?? email)

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

    return { handleSignup, successMessage, error, isLoading }

}
