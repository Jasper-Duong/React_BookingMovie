import React, { useState } from 'react'
import { Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input} from 'antd';
import { Space, Table, Tag } from 'antd';
import axios from "axios";
import { fetchFilmListApi } from '../../../services/filmList';
import { useEffect } from 'react';
import './index.scss'

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);



const DEFAULT_COLUMNS = [
    {
        title: 'Mã phim',
        dataIndex: 'maPhim',
        key: 'maPhim',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Hình ảnh',
        dataIndex: 'hinhAnh',
        key: 'hinhAnh',
    },
    {
        title: 'Tên phim',
        dataIndex: 'tenPhim',
        key: 'tenPhim',
    },
    {
        title: 'Mô tả',
        key: 'moTa',
        dataIndex: 'moTa',
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
];

const onSearch = (value) => console.log(value);

export default function Film() {
    const [filmList, setFilmList] = useState([]);
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchFilmList();
    }, [])

    useEffect(() => {
        setData(filmList.map((ele, idx) => {
            return {
                key: idx,
                maPhim: ele.maPhim,
                hinhAnh: <img src={ele.hinhAnh} className="w-25"></img>,
                tenPhim: ele.tenPhim,
                moTa: <span className="label_title">{ele.moTa}</span> ,
                hanhDong: "",
            }
        }))
        setColumns(DEFAULT_COLUMNS);
        
    },[filmList])
    const fetchFilmList = async () => {
        const result = await fetchFilmListApi();

        setFilmList(result.data.content);
    }
    return (
        <div>
            <h2>Quản lý Phim</h2>
            <Button>Thêm Phim</Button>
            <Search className='my-2'
                placeholder="Tìm tên phim"
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
