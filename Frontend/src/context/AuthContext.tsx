import { createContext, useContext, useEffect, useState } from "react"
import type { AuthContextProps } from "../assets/contextProps/AuthContextProps"
import type { AuthUser } from "../assets/types/AuthUser"

interface AuthContextProviderProps{

    children: React.ReactNode

}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthContextProvider:React.FC<AuthContextProviderProps> = ({ children })=>{

    const [email, setEmail] = useState<string>(''),
          [password, setPassword] = useState<string>(''),
          [error, setError] = useState<string | null>(null),
          [successMessage, setSuccessMessage] = useState<string | null>(null),
          [isLoading, setIsLoading] = useState<boolean>(false),
          [authUser, setAuthUser] = useState<AuthUser | null>(null),
          [isAuth, setIsAuth] = useState<boolean>(false)

    const updateAuthUser = (user: AuthUser | null) =>{

        setAuthUser(user)

        setIsAuth(Boolean(user))

    }

    useEffect(() =>{

        const checkAuthentication = async() =>{

            try{

                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {

                    credentials: "include"

                }),
                    user = await response.json() as { user: AuthUser | null }

                if(!response.ok || !user.user){

                    setAuthUser(null)

                    setIsAuth(false)

                    return

                }

                setAuthUser(user.user)

                setIsAuth(true)

            }catch(error){

                setAuthUser(null)

                setIsAuth(false)

            }

        }

        checkAuthentication()

    }, [])

    const contextValue: AuthContextProps ={

        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        successMessage,
        setSuccessMessage,
        isLoading,
        setIsLoading,
        authUser,
        updateAuthUser,
        isAuth,
        setIsAuth

    }

    return(

        <AuthContext.Provider value={contextValue}>

            {children}

        </AuthContext.Provider>

    )

}

export const useAuthContext = () =>{

     const context = useContext(AuthContext)

     if(!context) throw new Error('useAuthContext must be used within AuthContextProvider')

     return context

}