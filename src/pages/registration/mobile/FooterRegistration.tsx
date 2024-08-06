import {Link} from "react-router-dom";
import {Paths} from "@/routers/paths";
import React from "react";
import {Button} from "antd-mobile";
import {Flex, Typography} from "antd";
import {useTranslation} from "@common/locale/translation";

const { Text } = Typography;
export const FooterRegistration = () => {
  const { auth } = useTranslation();
  return(
    <>
      <Flex align={"center"} justify={"center"} gap={5}>
        <Text>У вас уже есть аккаунт? <Link to={Paths.SIGN_IN_MOBILE} target="_blank">{auth.signIn}</Link></Text>
      </Flex>
      <br/>
      <Flex align={"center"} justify={"center"}>
        <Flex justify={"center"}><Button type='submit' color='primary' size="middle">{auth.signUp}</Button></Flex>
      </Flex>
    </>
  )
}

