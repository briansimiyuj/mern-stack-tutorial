import type { AuthUser } from "../types/AuthUser"

export interface AuthContextProps{

    email: string
    setEmail: (email: string) => void
    password: string
    setPassword: (password: string) => void
    error: string | null
    setError: (error: string | null) => void
    successMessage: string | null
    setSuccessMessage: (message: string | null) => void
    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void
    authUser: AuthUser | null
    updateAuthUser: (authUser: AuthUser | null) => void
    isAuth: boolean
    setIsAuth: (isAuth: boolean) => void

}