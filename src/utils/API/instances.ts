import axios from "axios";
import {URL} from "../constants.ts";

export const notAuthorizedRequestAuth = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json",
    }
});

