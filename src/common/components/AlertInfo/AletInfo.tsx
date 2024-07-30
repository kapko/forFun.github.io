import React from 'react';
import { Alert } from 'antd';
import { LoginProps } from "../../../pages/signIn/type";

const AlertInfo: React.FC<LoginProps> = ({error}) => {
  return (
    <Alert message={error} type="error"/>
  );
};

export default AlertInfo;