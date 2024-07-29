import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Registration from "../pages/registration/Registration";
import SignIn from "../pages/signIn/SignIn";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Registration/>,
  },
  {
    path: '/signIn',
    element: <SignIn/>,
  },
]);