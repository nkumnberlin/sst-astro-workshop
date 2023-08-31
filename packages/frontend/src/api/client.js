import { BACKEND_API_URL } from "../constants";
import axios from "axios";
export var client = axios.create({
    baseURL: BACKEND_API_URL,
});
