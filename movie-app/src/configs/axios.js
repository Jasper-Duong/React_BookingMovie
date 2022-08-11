import axios from "axios";
import { BASE_URL, TOKENCYBERSOFT, USER_INFO_KEY } from "../constants/common";



const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        TokenCybersoft: TOKENCYBERSOFT,
        // Authorization: userInfo?.accessToken,
    }
})

//REQUEST: A  => interceptors => B

request.interceptors.request.use((config) => {
    let userInfo = localStorage.getItem(USER_INFO_KEY);
    
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        
        // Bearer: tiêu chuẩn json web token
        config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
    }

    return config;
})

//RESPONSE: A => interceptors => B
request.interceptors.response.use((respone) => {
    // console.log(respone);
    return respone;
})

export { request };

