import {Link} from "react-router-dom";
import {Paths} from "@/routers/paths";
import React from "react";
import {Button, Grid} from "antd-mobile";
import {Flex, Typography} from "antd";
import {useTranslation} from "@common/locale/translation";
import AlertInfo from "@common/components/web/AlertInfo/AletInfo";
import {useAuthStore} from "@/store/auth/auth.store";

const { Text } = Typography;
export const FooterSignUp = () => {
  const { auth } = useTranslation();
  const { signInError } = useAuthStore();
  return(
    <>
      <AlertInfo message={signInError} type='error'/>
      <Grid columns={1} gap={40}>
        <Grid.Item>
          <Flex align={"center"} justify={"center"} gap={5}>
            <Text>У вас уже есть аккаунт? <Link to={Paths.SIGN_IN_MOBILE} target="_blank">{auth.signIn}</Link></Text>
          </Flex>
        </Grid.Item>
        <Grid.Item>
          <Flex align={"center"} justify={"center"}>
            <Flex justify={"center"}><Button type='submit' color='primary' size="middle">{auth.signUp}</Button></Flex>
          </Flex>
        </Grid.Item>
      </Grid>
    </>
  )
}

