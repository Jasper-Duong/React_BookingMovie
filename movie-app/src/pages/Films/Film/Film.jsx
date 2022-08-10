import React from 'react'
import { Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input} from 'antd';
import { Space, Table, Tag } from 'antd';

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);



const columns = [
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
        // render: (_, { tags }) => (
        //     <>
        //         {tags.map((tag) => {
        //             let color = tag.length > 5 ? 'geekblue' : 'green';

        //             if (tag === 'loser') {
        //                 color = 'volcano';
        //             }

        //             return (
        //                 <Tag color={color} key={tag}>
        //                     {tag.toUpperCase()}
        //                 </Tag>
        //             );
        //         })}
        //     </>
        // ),
    },
    {
        title: 'Hành động',
        key: 'hanhDong',
        render: () => {
            return(
                <div>
                    <Button type='danger'>Xóa</Button>
                <Button type='primary'>Sửa</Button>
                </div>
                
            )
        }
    },
];
const data = [
    {
        key: '1',
        maPhim: '1',
        hinhAnh: 'John Brown',
        tenPhim: "sd",
        moTa: 'New York No. 1 Lake Park',
        hanhDong: "",
    },
];


const onSearch = (value) => console.log(value);

export default function Film() {
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
