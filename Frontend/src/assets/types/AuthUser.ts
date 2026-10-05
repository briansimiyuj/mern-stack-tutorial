export interface AuthUser{

    email: string
    token: string

}

export interface SignupResponse{

    email?: string
    token?: string
    message?: string

}