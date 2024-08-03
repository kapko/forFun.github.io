import React from 'react'
import {
  Form,
  Input,
  Button, Checkbox, Space,
} from 'antd-mobile'
import {LockOutline, UserOutline} from "antd-mobile-icons";

const LoginMobile =  () => {

  return (
    // <Space justify={"center"} align={"center"} style={{height:'100vh'}} block>
      <Form
        layout='horizontal'
        footer={
        <>
          <Button block type='submit'
                  color='primary'
                  size='large'
          style={{marginBottom:20}}>
            Log In
          </Button>
          Or <a href="" style={{textDecoration:"none"}}>register now!</a>
        </>
        }>
        <Form.Header>Login Form</Form.Header>
        <Form.Item
          layout='horizontal'
          name='name'
          label={<UserOutline/>}
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input onChange={console.log} placeholder='Username' clearable maxLength={20}/>
        </Form.Item>
        <Form.Item
          layout='horizontal'
          name='password'
          label={<LockOutline/>}
          rules={[{ required: true, message: 'Please input your Password!'}]}
        >
          <Input onChange={console.log}
                 placeholder='Password'
                 clearable type='password'
                maxLength={50}
        />
        </Form.Item>
        <Form.Item>
          <Space direction='horizontal' justify='between' block>
            <Checkbox block>Remember me</Checkbox>
            <a href="" style={{textDecoration:"none"}}>
              Forgot password
            </a>
          </Space>
        </Form.Item>
      </Form>
    // </Space>
  )
}

export default LoginMobile;