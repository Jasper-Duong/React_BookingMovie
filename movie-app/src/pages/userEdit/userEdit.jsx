import {
    Button,
    Form,
    Input,
    Radio,
    Select,
    notification,
  } from 'antd';
import React, {useState} from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UpdateUserApi } from '../../services/userList';

export default function UserEdit() {
    const [componentSize, setComponentSize] = useState('default');
    
    const userSelected = useSelector(state => state.userReducer.userSelected);
    const [userState, setUserState] = useState({});

    const navigate = useNavigate();
    useEffect(() => {
        if(userSelected){
        setUserState(
            userSelected,
        );
        }
    }, [userSelected])

    useEffect(() => {
        userState.maNhom = "GP02";
        userSelected.maNhom = "GP02";
        console.log(userState);
    }, [userState])

    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };

    const onChange = (e) => {
        const {name, value} = e.target;
        setUserState({
            ...userState,
            [name]: value,
        })
        console.log(userState);
    }

    const onChangeSelect = (e) => {
        setUserState({
            ...userState,
            maLoaiNguoiDung: e,
        })
    }

    const handleUpdate = async () => {
        if(userState !== userSelected){
            await UpdateUserApi(userState);
            notification.success({
                description: "Successfully!!!"
              })
            navigate('/admin/user');
        }else{
            notification.success({
                description: "Not change!!!"
              })
        }
        
    }

    return (
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="vertical"
        initialValues={{
            username: userSelected.taiKhoan,
            type: userSelected.maLoaiNguoiDung,
            password: userSelected.matKhau,
            email: userSelected.email,
            phoneNumber: userSelected.soDT,
            name: userSelected.hoTen,
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={handleUpdate}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Username" name="username" rules={[
          {
            required: true,
            message: "Please enter username"
          },
          {
            whitespace: true,
            message: `Please enter username`,
          },
        ]}>
          <Input disabled onChange={onChange} name="taiKhoan"/>
        </Form.Item>
        <Form.Item label="Type" name="type">
          <Select onChange={onChangeSelect}>
            <Select.Option value="QuanTri"  name="maLoaiNguoiDung">Admin</Select.Option>
            <Select.Option value="KhachHang"  name="maLoaiNguoiDung">Guest</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[
          {
            required: true,
            message: "Please enter password"
          },
          {
            whitespace: true,
            message: `Please enter password`,
          },
        ]}>
          <Input onChange={onChange} name="matKhau"/>
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[
          {
            required: true,
            message: "Please enter email"
          },
          {
            type: 'email',
            message: "Wrong format",
          }
        ]}>
          <Input onChange={onChange} name="email"/>
        </Form.Item>
        <Form.Item label="Phone number" name="phoneNumber" rules={[
          {
            required: true,
            message: "Please enter phone number"
          },
          {
            whitespace: true,
            message: `Please enter phone number`,
          },
        ]}>
          <Input onChange={onChange} name="soDT"/>
        </Form.Item>
        <Form.Item label="Name" name="name" rules={[
          {
            required: true,
            message: "Please enter your name"
          },
          {
            whitespace: true,
            message: `Please enter your name`,
          },
        ]}>
          <Input onChange={onChange} name="hoTen"/>
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary'>Update</Button>
        </Form.Item>
      </Form>
    );
}
