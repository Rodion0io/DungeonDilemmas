export interface UserLoginModel{
    email: string;
    password: string;
}

export interface TokenResponseModel{
    accessToken: string;
    refreshToken: string;
}