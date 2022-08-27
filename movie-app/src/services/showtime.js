import { request } from "../configs/axios"

export const fetchShowTimeApi = (maPhim) => {
    return request({
        url: `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET"
    })
}