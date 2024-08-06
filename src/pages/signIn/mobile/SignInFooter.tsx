import {Button, Grid} from "antd-mobile";
import {Typography, Flex} from "antd";
import {Paths} from "@/routers/paths";
import React from "react";
import {useTranslation} from "@common/locale/translation";
const { Link } = Typography;
const { Text } = Typography;
export const SignInFooter = () => {
  const { auth } = useTranslation();
  return (
    <Grid columns={1} gap={40}>
      <Grid.Item>
        <Flex justify={"center"} align='center'>
          <Text>У вас еще нет учетной записи?</Text>
        </Flex>
        <Flex  justify={"center"} align='center'>
          <Text> <Link href={Paths.SIGN_UP_MOBILE} target="_blank">Зарегистрируйтесь сейчас</Link></Text>
        </Flex>
      </Grid.Item>
      <Grid.Item>
        <Flex justify={"center"}><Button type='submit' color='primary' size="middle">
          {auth.signIn}
        </Button></Flex>
      </Grid.Item>
    </Grid>
    )
};
