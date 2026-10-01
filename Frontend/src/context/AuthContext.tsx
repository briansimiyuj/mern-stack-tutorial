import { createContext, useContext, useState } from "react"
import type { AuthContextProps } from "../assets/contextProps/AuthContextProps"

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
          [isAuth, setIsAuth] = useState<boolean>(false)

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