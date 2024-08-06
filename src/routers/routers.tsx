import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Paths } from "./paths";
import Registration from "../pages/registration/Registration";
import SignIn from "../pages/signIn/SignIn";
import SignUpMobile from "@/pages/registration/mobile/SignUp.mobile";
import SignInMobile from "@/pages/signIn/mobile/SignIn.mobile";

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
