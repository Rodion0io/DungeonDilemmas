import axios from "axios";

import {ACCESS, BEARER, REFRESH, URL} from "../constants.ts";
import {ROUTES} from "../routes.ts";

import {refreshRequest} from "./refreshRequest.ts";

import type {TokenResponseModel} from "../../@types/types.ts";

export const request = axios.create({
    baseURL: URL
});

request.interceptors.response.use((response) => {
    return response;
},

    async (error) => {
        if (error.response.status === 401){
            const refreshToken: string | null = localStorage.getItem(REFRESH);

            try{
                if (refreshToken){
                    const response: TokenResponseModel = await refreshRequest({refreshToken: refreshToken});
                    localStorage.removeItem(ACCESS);
                    localStorage.removeItem(REFRESH);

                    localStorage.setItem(ACCESS, response.accessToken);
                    localStorage.setItem(REFRESH, response.refreshToken);

                    error.config.headers.Authorization = `${BEARER} ${response.accessToken}`;
                    return request(error.config);
                }
            }
            catch (error) {
                localStorage.removeItem('token');
                localStorage.removeItem('refresh');
                window.location.href = ROUTES.AUTHORIZATION;
            }
        }

        return Promise.reject(error);
})