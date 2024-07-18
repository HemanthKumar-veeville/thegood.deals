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
import { ActiveDeal } from "./screens/ActiveDeal/ActiveDeal";
import { DraftDeal } from "./screens/DraftDeal/DraftDeal";
import { WaitingDeal } from "./screens/WaitingDeal/WaitingDeal";

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
  {
    path: "/admin-active-deal",
    element: <ActiveDeal />,
  },
  {
    path: "/admin-waiting-deal",
    element: <WaitingDeal />,
  },
  {
    path: "/admin-draft-deal",
    element: <DraftDeal />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
