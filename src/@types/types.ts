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
}

export interface QuizPagedListModel{
    quizModels: QuizModel[];
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

export interface QuizCreateModel{
    title: string;
    description: string;
    quizDifficulty: QuizDifficult;
}


export interface QuizDetailModel{
    id: string;
    title: string;
    description: string;
    difficulty: QuizDifficult;
    status: QuizType;
    creator: UserShortModel;
    questions: QuestionsModel[];
}

export interface QuestionsModel{
    id: string;
    duration: number;
    damage: number;
    reward: number;
    questionType: string;
    questionText: string;
    questionNumber: number;
    answers: QuestionAnswer[];
}

export interface QuestionAnswer{
    id: string;
    answerType: string;
    answerType1: string;
    text: string;
    questionId: string;
}

export interface QuestionCreateModel{
    duration: number;
    damage: number;
    reward: number;
    questionType: string;
    questionText: string;
}

export interface AnswerCreateModel{
    answerType: string;
    answerType1: string;
    text: string;
}