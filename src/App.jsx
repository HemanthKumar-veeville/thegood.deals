import { SignIn } from "./screens/SignIn/SignIn";
import { SignUp } from "./screens/SignUp/SignUp";
import { Auth } from "./screens/Auth/Auth";
import { VerificationOTP } from "./screens/VerificationOTP/VerificationOTP";
import { Home } from "./screens/Home/Home";
import { Account } from "./screens/Account";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/verify",
    element: <VerificationOTP />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
