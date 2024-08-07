import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Paths } from "./paths";
import SignUpMobile from "@/pages/auth/signUp/mobile/SignUp.mobile";
import SignInMobile from "@/pages/auth/signIn/mobile/SignIn.mobile";
import Registration from "@/pages/auth/signUp/signUp";
import SignIn from "@/pages/auth/signIn/signIn";

export const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <div>Hello World!</div>,
  },
  {
    path: Paths.SIGN_UP,
    element: <Registration/>,
  },
  {
    path: Paths.SIGN_IN,
    element: <SignIn/>,
  },
  {
    path: Paths.SIGN_UP_MOBILE,
    element: <SignUpMobile/>,
  },
  {
    path: Paths.SIGN_IN_MOBILE,
    element: <SignInMobile/>,
  },
]);
