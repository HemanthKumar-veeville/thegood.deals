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
import { Wallet } from "./screens/Wallet/Wallet";
import { Withdrawal } from "./screens/Withdrawal/Withdrawal";
import { Invitations } from "./screens/Invitations/Invitations";
import { Orders } from "./screens/Orders/Orders";
import { ViewGoodDeal } from "./screens/ViewGoodDeal/ViewGoodDeal";
import { ThanksForWithdrawal } from "./screens/ThanksForWithdrawal/ThanksForWithdrawal";
import { InviteLovedOnes } from "./screens/InviteLovedOnes/InviteLovedOnes";
import { InvitationSent } from "./screens/InvitationSent/InvitationSent";
import { GuestDealView } from "./screens/GuestDealView/GuestDealView";

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
  {
    path: "/admin-wallet",
    element: <Wallet />,
  },
  {
    path: "/admin-withdrawal",
    element: <Withdrawal />,
  },
  {
    path: "/thanks-withdrawal",
    element: <ThanksForWithdrawal />,
  },
  {
    path: "/admin-invitations",
    element: <Invitations />,
  },
  {
    path: "/admin-orders",
    element: <Orders />,
  },
  {
    path: "/admin-view-deal",
    element: <ViewGoodDeal />,
  },
  {
    path: "/invite-loved-ones",
    element: <InviteLovedOnes />,
  },
  {
    path: "/admin-invitations-sent",
    element: <InvitationSent />,
  },
  {
    path: "/guest-deal-view",
    element: <GuestDealView />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
