import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Paths } from "./paths";
import Registration from "../pages/registration/registration";
import SignIn from "../pages/signIn/signIn";

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
]);
