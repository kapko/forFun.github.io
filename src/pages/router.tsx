import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Registration from "../containers/registration";
import LoginContainer from "../containers/auth";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Registration/>,
  },
  {
    path: '/auth',
    element: <LoginContainer/>,
  },
]);