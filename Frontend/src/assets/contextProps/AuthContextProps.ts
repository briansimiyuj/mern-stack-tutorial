export interface AuthContextProps{

    email: string
    setEmail: (email: string) => void
    password: string
    setPassword: (password: string) => void
    error: string | null
    setError: (error: string | null) => void
    isAuth: boolean
    setIsAuth: (isAuth: boolean) => void

}