import React from 'react';
import { Alert } from 'antd';
import {AlertProps} from "antd/es/alert/Alert";

/***
  * Alert component for custom adding input field
 */

const AlertInfo = ({message, type}: Partial<AlertProps>): JSX.Element | null => {
  if (!message) return null;
  return <Alert message={message} type={type} />
};

export default AlertInfo;
