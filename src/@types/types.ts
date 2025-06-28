export interface UserLoginModel{
    email: string;
    password: string;
}

export interface UserRegisterModel extends UserLoginModel{
    userName: string;
}

export interface UserRegisterFormModel extends UserRegisterModel{
    passwordRepeat: string;
}

interface BestUsersGameModel{
    name: string;
    score: number;
}

export interface UserModel{
    id: string;
    email: string;
    userName: string;
    totalPoints: number;
    bestUsersGame: BestUsersGameModel
}

export interface TokenResponseModel{
    accessToken: string;
    refreshToken: string;
}

export interface RefreshTokenRequestModel{
    refreshToken: string;
}

export interface TokenClaims{
    sub: string;
    exp: number;
    userId: string;
}

export interface UserEditModel{
    newUserName: string;
    newEmail: string;
}

export interface UserEditPasswordModel{
    oldPassword: string;
    newPassword: string;
}