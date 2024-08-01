import React, { useState } from 'react';
import { AuthData } from "../../components/auth/type";
import Authorization from "../../components/auth/authorization";
import { useAuthStore } from "../../store/actions";
const LoginContainer = () => {
  const { error, email } = useAuthStore();

  const onLoginSubmit = async (data: AuthData) => {
    await email(data.username, data.password);
  };

  return <Authorization error={error} onSubmit={onLoginSubmit}/>
};

export default LoginContainer;