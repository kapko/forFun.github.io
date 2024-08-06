import {Button} from "antd-mobile";
import {Typography, Flex} from "antd";
const { Link } = Typography;

export const SignInFooter = () => {
  return <>
    <Flex gap={5} justify={"center"} align='center'>или <Link href="/public">Зарегестрироваться сейчас</Link></Flex>
    <Flex justify={"center"}><Button type='submit' color='primary' size="middle">Войти</Button></Flex>
  </>
};
