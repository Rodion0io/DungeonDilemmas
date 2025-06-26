export interface UserLoginModel{
    email: string;
    password: string;
}

export interface UserRegisterModel extends UserLoginModel{
    userName: string;
}

export interface TokenResponseModel{
    accessToken: string;
    refreshToken: string;
}