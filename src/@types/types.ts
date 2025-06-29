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

export type UserOtherModel = Omit<UserModel, "email">;

export interface UserOtherModelList{
    users: UserOtherModel[]
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

export interface EditDatas{
    newUserName: string;
    newEmail: string;
    oldPassword: string;
    newPassword: string;
}

export interface UserEditModel{
    newUserName: string;
    newEmail: string;
}

// type UserEdit = Omit<EditDatas, "newUserName" | "newEmail">

export interface UserEditPasswordModel{
    oldPassword: string;
    newPassword: string;
}

export type UserShortModel = Omit<UserModel, "totalPoints" | "bestUsersGame">

export type QuizDifficult = "Easy" | "Medium" | "Hard" | "Unknown";

type QuizType = "Draft" | "Published";

export interface QuizModel{
    id: string;
    title: string;
    description: string;
    difficulty: QuizDifficult;
    status: QuizType;
    userShortModel: UserShortModel;
    paginationModel: PaginationModel;
}

export interface PaginationModel{
    page: number;
    pageSize: number;
    pagesCount: number;
}

export interface FilterModel{
    title?: string;
    description?: string;
    difficulty?: QuizDifficult;
    creatorEmail?: string;
    page: number;
    pageSize: number;
}