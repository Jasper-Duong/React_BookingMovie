import React, { useEffect, useState } from 'react'
import { Input} from 'antd';
import { Space, Table, Tag } from 'antd';
import { Button } from 'antd';
import { fetchUserListApi } from '../../services/userList';


const { Search } = Input;
const onSearch = (value) => console.log(value);
const columns = [
    {
        title: 'Tài khoản',
        dataIndex: 'taiKhoan',
        key: 'taiKhoan',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Họ Tên',
        dataIndex: 'hoTen',
        key: 'hoTen',
    },
    {
        title: 'Loại người dùng',
        dataIndex: 'loaiNguoiDung',
        key: 'loaiNguoiDung',
    },
    {
        title: 'Số điện thoại',
        key: 'sdt',
        dataIndex: 'sdt',
    },
    {
        title: 'Email',
        key: 'email',
        dataIndex: 'email',
    },
    {
        title: 'Mật khẩu',
        key: 'matKhau',
        dataIndex: 'matKhau',
    },
    {
        title: 'Hành động',
        key: 'hanhDong',
        render: () => {
            return(
                <div>
                    <Button className='mx-2' type='danger'>Xóa</Button>
                    <Button className='mx-2' type='primary'>Sửa</Button>
                </div>
                
            )
        }
    },
]

export default function User() {
    const [userList, setUserList] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetchUserList();

    },[]);

    useEffect(() => {
        setData(userList.map((ele, idx) => {
            return {
                key: idx,
                taiKhoan: ele.taiKhoan,
                hoTen: ele.hoTen,
                loaiNguoiDung: ele.maLoaiNguoiDung,
                sdt: ele.soDT,
                email: ele.email,
                matKhau: ele.matKhau,
            }
        }))
    },[userList])

    const fetchUserList = async ()=>{
        const result = await fetchUserListApi();

        setUserList(result.data.content);

        console.log(result.data.content);
    }
  return (
    <div>
        <h2>Quản lý người dùng</h2>
        <Search className='my-2'
                placeholder="Tìm tài khoản"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
        <div>
                <Table columns={columns} dataSource={data} />;
            </div>
    </div>
  )
}
