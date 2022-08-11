import { request } from "../configs/axios"


export const fetchUserListApi = () => {
    return request({
        url: '/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
        method: 'GET',
    })
}