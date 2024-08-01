import React from 'react';
import {LoginProps} from "../auth/type";
import {Alert} from "antd";
const Error: React.FC<LoginProps> = ({error}) => {
  return (
    <div>

      {error && <Alert message={error} type="error" />}
    </div>
  );
};

export default Error;