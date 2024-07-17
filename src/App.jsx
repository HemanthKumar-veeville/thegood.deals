import { SignIn } from "./screens/SignIn/SignIn";
import { SignUp } from "./screens/SignUp/SignUp";
import { Auth } from "./screens/Auth/Auth";
import { VerificationOTP } from "./screens/VerificationOTP/VerificationOTP";
import { Home } from "./screens/Home/Home";
import { Account } from "./screens/Account/Account";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateDeal } from "./screens/CreateDeal/CreateDeal";
import { InformToCraftsMan } from "./screens/InformToCraftsMan/InformToCraftsMan";
import { ThanksToAdmin } from "./screens/ThanksToAdmin/ThanksToAdmin";

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
  {
    path: "/create-deal",
    element: <CreateDeal />,
  },
  {
    path: "/inform-deal",
    element: <InformToCraftsMan />,
  },
  {
    path: "/thanks-admin",
    element: <ThanksToAdmin />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
