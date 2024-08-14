import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkUserLoginStatus } from "./redux/app/user/userSlice";
import PageWrapper from "./PageWrapper";
import "./App.css";

// Import all your components
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
import { SettingsPage } from "./screens/Settings/Settings";
import { EditProfile } from "./screens/EditProfile/EditProfile";
import { Notifications } from "./screens/Notifications/Notifications";
import { LanguageSelection } from "./screens/LanguageSelection/LanguageSelection";
import { CurrencySelection } from "./screens/CurrencySelection/CurrencySelection";
import { AdminViewGoodDeal } from "./screens/AdminViewGoodDeal/AdminViewGoodDeal";
import { MyInformation } from "./screens/MyInformation/MyInformation";
import { ArtisanDeniedTheScreen } from "./screens/ArtisanDenied/ArtisanDenied";
import { ArtisanConfirmTheScreen } from "./screens/ArtisanConfirmed/ArtisanConfirmed";
import { GuestsSendReviewsScreen } from "./screens/GuestSendReview/GuestSendReview";
import { ArtisanEmailScreen } from "./screens/ArtisanEmailScreen/ArtisanEmailScreen";
import { ArtisanEmailList } from "./components/ArtisanEmailList";
import { GuestEmailAskForScreen } from "./screens/AskGuestReview/AskGuestReview";
import { LostPassword } from "./screens/LostPassword/LostPassword";
import { ResetPassword } from "./screens/ResetPassword/ResetPassword";
import { InfinitySpin } from "react-loader-spinner";

// Function to wrap components with PageWrapper
const wrapWithPageWrapper = (Component) => (
  <PageWrapper>
    <Component />
  </PageWrapper>
);

// ProtectedRoute component
function ProtectedRoute({ element }) {
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      await dispatch(checkUserLoginStatus());
      setLoading(false);
    };
    checkLoginStatus();
  }, [dispatch]);

  if (loading) {
    return (
      <InfinitySpin
        height="300"
        width="300"
        radius="9"
        color="#2a4e4a"
        ariaLabel="three-dots-loading"
      />
    ); // Or any loading spinner
  }

  return isUserLoggedIn ? element : <Navigate to="/auth?login" />;
}

// App component
function App() {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoginStatus = async () => {
      dispatch(checkUserLoginStatus());
      setIsReady(true);
    };
    checkLoginStatus();
  }, [dispatch]);

  if (!isReady) {
    return (
      <InfinitySpin
        height="300"
        width="300"
        radius="9"
        color="#2a4e4a"
        ariaLabel="three-dots-loading"
      />
    ); // Or any loading spinner
  }

  const router = createBrowserRouter([
    { path: "/", element: wrapWithPageWrapper(Home) },
    { path: "/auth", element: wrapWithPageWrapper(Auth) },
    { path: "/verify", element: wrapWithPageWrapper(VerificationOTP) },
    {
      path: "/account",
      element: <ProtectedRoute element={wrapWithPageWrapper(Account)} />,
    },
    {
      path: "/create-deal",
      element: <ProtectedRoute element={wrapWithPageWrapper(CreateDeal)} />,
    },
    {
      path: "/inform-deal",
      element: (
        <ProtectedRoute element={wrapWithPageWrapper(InformToCraftsMan)} />
      ),
    },
    {
      path: "/thanks-admin",
      element: <ProtectedRoute element={wrapWithPageWrapper(ThanksToAdmin)} />,
    },
    {
      path: "/admin-active-deal",
      element: <ProtectedRoute element={wrapWithPageWrapper(ActiveDeal)} />,
    },
    {
      path: "/admin-waiting-deal",
      element: <ProtectedRoute element={wrapWithPageWrapper(WaitingDeal)} />,
    },
    {
      path: "/admin-draft-deal",
      element: <ProtectedRoute element={wrapWithPageWrapper(DraftDeal)} />,
    },
    {
      path: "/admin-wallet",
      element: <ProtectedRoute element={wrapWithPageWrapper(Wallet)} />,
    },
    {
      path: "/admin-withdrawal",
      element: <ProtectedRoute element={wrapWithPageWrapper(Withdrawal)} />,
    },
    {
      path: "/thanks-withdrawal",
      element: wrapWithPageWrapper(ThanksForWithdrawal),
    },
    {
      path: "/admin-invitations",
      element: <ProtectedRoute element={wrapWithPageWrapper(Invitations)} />,
    },
    {
      path: "/admin-orders",
      element: <ProtectedRoute element={wrapWithPageWrapper(Orders)} />,
    },
    {
      path: "/admin-view-deal",
      element: (
        <ProtectedRoute element={wrapWithPageWrapper(AdminViewGoodDeal)} />
      ),
    },
    {
      path: "/invite-loved-ones",
      element: (
        <ProtectedRoute element={wrapWithPageWrapper(InviteLovedOnes)} />
      ),
    },
    {
      path: "/admin-invitations-sent",
      element: <ProtectedRoute element={wrapWithPageWrapper(InvitationSent)} />,
    },
    {
      path: "/guest-deal-view",
      element: <ProtectedRoute element={wrapWithPageWrapper(GuestDealView)} />,
    },
    { path: "/about-us", element: wrapWithPageWrapper(AboutUs) },
    { path: "/how-it-works", element: wrapWithPageWrapper(HowItWorks) },
    { path: "/contact-us", element: wrapWithPageWrapper(ContactUs) },
    { path: "/side-bar", element: wrapWithPageWrapper(SideBar) },
    { path: "/help-me", element: wrapWithPageWrapper(PublicNeedHelp) },
    {
      path: "/settings",
      element: <ProtectedRoute element={wrapWithPageWrapper(SettingsPage)} />,
    },
    {
      path: "/edit-profile",
      element: <ProtectedRoute element={wrapWithPageWrapper(EditProfile)} />,
    },
    {
      path: "/notifications",
      element: <ProtectedRoute element={wrapWithPageWrapper(Notifications)} />,
    },
    {
      path: "/select-language",
      element: wrapWithPageWrapper(LanguageSelection),
    },
    {
      path: "/select-currency",
      element: wrapWithPageWrapper(CurrencySelection),
    },
    {
      path: "/my-information",
      element: <ProtectedRoute element={wrapWithPageWrapper(MyInformation)} />,
    },
    {
      path: "/artisan-denied-deal",
      element: (
        <ProtectedRoute element={wrapWithPageWrapper(ArtisanDeniedTheScreen)} />
      ),
    },
    {
      path: "/artisan-confirmed-deal",
      element: (
        <ProtectedRoute
          element={wrapWithPageWrapper(ArtisanConfirmTheScreen)}
        />
      ),
    },
    {
      path: "/guest-send-review",
      element: (
        <ProtectedRoute
          element={wrapWithPageWrapper(GuestsSendReviewsScreen)}
        />
      ),
    },
    {
      path: "/artisan-email",
      element: (
        <ProtectedRoute element={wrapWithPageWrapper(ArtisanEmailScreen)} />
      ),
    },
    {
      path: "/artisan-email-list",
      element: (
        <ProtectedRoute element={wrapWithPageWrapper(ArtisanEmailList)} />
      ),
    },
    {
      path: "/ask-guest-review",
      element: (
        <ProtectedRoute element={wrapWithPageWrapper(GuestEmailAskForScreen)} />
      ),
    },
    { path: "/lost-password", element: wrapWithPageWrapper(LostPassword) },
    { path: "/reset-password", element: wrapWithPageWrapper(ResetPassword) },
  ]);

  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
}

export default App;
