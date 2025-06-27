import type {TokenClaims} from "../@types/types.ts";

export const decoderToken = <T extends keyof TokenClaims>(token: string, query: T): TokenClaims[T] => {

    let tokenParts: string[] = token.split(".");

    let res= JSON.parse(atob(tokenParts[1]));

    return res[query];

}