import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import "./App.css";

import { Home } from "./screens/Home/Home";
import { Auth } from "./screens/Auth/Auth";
import { VerificationOTP } from "./screens/VerificationOTP/VerificationOTP";
import { Account } from "./screens/Account/Account";
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
import AboutUs from "./screens/AboutUs/AboutUs";
import { SideBar } from "./screens/SideBar/SideBar";
import { HowItWorks } from "./screens/HowItWorks/HowItWorks";
import ContactUs from "./screens/ContactUs/ContactUs";
import { PublicNeedHelp } from "./screens/HelpMe/HelpMe";
import { AdminNeedHelp } from "./screens/HelpMe/AdminHelpMe";
import { SettingsPage } from "./screens/Settings/Settings";

const wrapWithPageWrapper = (Component) => (
  <PageWrapper>
    <Component />
  </PageWrapper>
);

const router = createBrowserRouter([
  { path: "/", element: wrapWithPageWrapper(Home) },
  { path: "/auth", element: wrapWithPageWrapper(Auth) },
  { path: "/verify", element: wrapWithPageWrapper(VerificationOTP) },
  { path: "/account", element: wrapWithPageWrapper(Account) },
  { path: "/create-deal", element: wrapWithPageWrapper(CreateDeal) },
  { path: "/inform-deal", element: wrapWithPageWrapper(InformToCraftsMan) },
  { path: "/thanks-admin", element: wrapWithPageWrapper(ThanksToAdmin) },
  { path: "/admin-active-deal", element: wrapWithPageWrapper(ActiveDeal) },
  { path: "/admin-waiting-deal", element: wrapWithPageWrapper(WaitingDeal) },
  { path: "/admin-draft-deal", element: wrapWithPageWrapper(DraftDeal) },
  { path: "/admin-wallet", element: wrapWithPageWrapper(Wallet) },
  { path: "/admin-withdrawal", element: wrapWithPageWrapper(Withdrawal) },
  {
    path: "/thanks-withdrawal",
    element: wrapWithPageWrapper(ThanksForWithdrawal),
  },
  { path: "/admin-invitations", element: wrapWithPageWrapper(Invitations) },
  { path: "/admin-orders", element: wrapWithPageWrapper(Orders) },
  { path: "/admin-view-deal", element: wrapWithPageWrapper(ViewGoodDeal) },
  { path: "/invite-loved-ones", element: wrapWithPageWrapper(InviteLovedOnes) },
  {
    path: "/admin-invitations-sent",
    element: wrapWithPageWrapper(InvitationSent),
  },
  { path: "/guest-deal-view", element: wrapWithPageWrapper(GuestDealView) },
  { path: "/about-us", element: wrapWithPageWrapper(AboutUs) },
  { path: "/how-it-works", element: wrapWithPageWrapper(HowItWorks) },
  { path: "/contact-us", element: wrapWithPageWrapper(ContactUs) },
  { path: "/side-bar", element: wrapWithPageWrapper(SideBar) },
  { path: "/help-me", element: wrapWithPageWrapper(PublicNeedHelp) },
  { path: "/settings", element: wrapWithPageWrapper(SettingsPage) },
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
}

export default App;
