import axios from "axios";
import { request } from "../configs/axios";
import { BASE_URL, TOKENCYBERSOFT } from "../constants/common";

const fetchFilmListApi = () => {
    // return axios({
    //     url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
    //     method: 'GET',
    //     headers:{
    //         TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyOSIsIkhldEhhblN0cmluZyI6IjE5LzAxLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NDA4NjQwMDAwMCIsIm5iZiI6MTY0NTk4MTIwMCwiZXhwIjoxNjc0MjM0MDAwfQ.YESwad1hPeFZLi1alQUINpqBwiG-eLBBTADYwGZBfQc',
    //     }
    // })
    return request({
        url: '/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        method: 'get',
    })
};

export {fetchFilmListApi};