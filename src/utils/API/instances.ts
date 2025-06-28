import axios from "axios";
import {ACCESS, REFRESH, URL} from "../constants.ts";
import {refreshRequest} from "./refreshRequest.ts";
import {ROUTES} from "../routes.ts";
import type {TokenResponseModel} from "../../@types/types.ts";

export const request = axios.create({
    baseURL: URL
});


let isRefreshing = false
let failedQueue: Array<{
    resolve: (value?: unknown) => void,
    reject: (reason?: any) => void
}> = []

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (token) {
            prom.resolve(token)
        }
        else {
            prom.reject(error)
        }
    })
    failedQueue = []
}

request.interceptors.response.use((response) => {
    return response;
},

    // async (error) => {
    //     if (error.response.status === 401){
    //         const refreshToken: string | null = localStorage.getItem(REFRESH);
    //
    //         try{
    //             if (refreshToken){
    //                 const response = await refreshRequest({refreshToken: refreshToken});
    //                 localStorage.removeItem(ACCESS);
    //                 localStorage.removeItem(REFRESH);
    //
    //                 localStorage.setItem(ACCESS, response.accessToken);
    //                 localStorage.setItem(REFRESH, response.refreshToken);
    //
    //                 error.config.headers.Authorization = `${BEARER} ${response.accessToken}`;
    //
    //                 return request(error.config);
    //             }
    //
    //         }
    //         catch (error) {
    //             localStorage.removeItem('token');
    //             localStorage.removeItem('refresh');
    //             window.location.href = ROUTES.AUTHORIZATION;
    //
    //         }
    //     }


    async (error) => {
        const api = error.config
        if (error.response?.status === 401 && !api._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject })
                })
                    .then((token) => {
                        api.headers.Authorization = `Bearer ${token}`
                        return request(api)
                    })
                    .catch((err) => Promise.reject(err))
            }

            api._retry = true
            isRefreshing = true

            try {
                const refreshToken = localStorage.getItem(REFRESH)
                if (!refreshToken) {
                    throw new Error("Refresh token was not found")
                }

                const response = await refreshRequest({refreshToken: refreshToken});
                const pair: TokenResponseModel = response;

                const newAccessToken = pair.accessToken
                const newRefreshToken = pair.refreshToken

                if (newAccessToken && newRefreshToken) {
                    console.log('success');
                    localStorage.setItem(ACCESS, newAccessToken)
                    localStorage.setItem(REFRESH, newRefreshToken)

                    processQueue(null, newAccessToken)
                }

                api.headers.Authorization = `Bearer ${newAccessToken}`

                return request(api);
            }
            catch (refreshingError) {
                processQueue(refreshingError, null)
                localStorage.removeItem(ACCESS)
                localStorage.removeItem(REFRESH);

                console.error(refreshingError)
                window.location.href = ROUTES.AUTHORIZATION;

                // if (globalLogout) {
                //     globalLogout()
                // }
                // else {
                //     localStorage.removeItem("accessToken")
                //     localStorage.removeItem("refreshToken")
                //     window.location.href = "/login"
                // }
                return Promise.reject(refreshingError)
            }
            finally {
                isRefreshing = false
            }
        }

        return Promise.reject(error);
})