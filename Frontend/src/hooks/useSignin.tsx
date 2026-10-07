import { useAuthContext } from "../context/AuthContext"

export const useSignin = ()=>{

    const { setError, setSuccessMessage, setIsLoading } = useAuthContext()

    const signIn = async(email: string, password: string) =>{

        setIsLoading(true)

        setError(null)

        setSuccessMessage(null)

        try{

            if(!email || !password){

                setError('Email and password are required')

                return

            }

            console.log('Sign-in email:', email)

            console.log('Sign-in password:', '*'.repeat(password.length))

            setSuccessMessage('Sign-in UI is ready. Connect the backend to authenticate your account.')

        }catch(error){

            setError(error instanceof Error ? error.message : 'Unable to sign in. Please try again.')

        }finally{

            setIsLoading(false)

        }

    }

    return { signIn }

}
