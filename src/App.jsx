import React, { useEffect, useState, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkUserLoginStatus } from "./redux/app/user/userSlice";
import "./App.css";
import loadable from "@loadable/component";

// loadable load your components
const Home = loadable(() => import("./screens/Home/Home"));
const Auth = loadable(() => import("./screens/Auth/Auth"));
const VerificationOTP = loadable(() =>
  import("./screens/VerificationOTP/VerificationOTP")
);
const Account = loadable(() => import("./screens/Account/Account"));
const CreateDeal = loadable(() => import("./screens/CreateDeal/CreateDeal"));
const InformToCraftsMan = loadable(() =>
  import("./screens/InformToCraftsMan/InformToCraftsMan")
);
const ThanksToAdmin = loadable(() =>
  import("./screens/ThanksToAdmin/ThanksToAdmin")
);
const ActiveDeal = loadable(() => import("./screens/ActiveDeal/ActiveDeal"));
const DraftDeal = loadable(() => import("./screens/DraftDeal/DraftDeal"));
const WaitingDeal = loadable(() => import("./screens/WaitingDeal/WaitingDeal"));
const Wallet = loadable(() => import("./screens/Wallet/Wallet"));
const Withdrawal = loadable(() => import("./screens/Withdrawal/Withdrawal"));
const Invitations = loadable(() => import("./screens/Invitations/Invitations"));
const Orders = loadable(() => import("./screens/Orders/Orders"));
const ViewGoodDeal = loadable(() =>
  import("./screens/ViewGoodDeal/ViewGoodDeal")
);
const ThanksForWithdrawal = loadable(() =>
  import("./screens/ThanksForWithdrawal/ThanksForWithdrawal")
);
const InviteLovedOnes = loadable(() =>
  import("./screens/InviteLovedOnes/InviteLovedOnes")
);
const InvitationSent = loadable(() =>
  import("./screens/InvitationSent/InvitationSent")
);
const GuestDealView = loadable(() =>
  import("./screens/GuestDealView/GuestDealView")
);
const AboutUs = loadable(() => import("./screens/AboutUs/AboutUs"));
const SideBar = loadable(() => import("./screens/SideBar/SideBar"));
const HowItWorks = loadable(() => import("./screens/HowItWorks/HowItWorks"));
const ContactUs = loadable(() => import("./screens/ContactUs/ContactUs"));
const PublicNeedHelp = loadable(() => import("./screens/HelpMe/HelpMe"));
const SettingsPage = loadable(() => import("./screens/Settings/Settings"));
const EditProfile = loadable(() => import("./screens/EditProfile/EditProfile"));
const Notifications = loadable(() =>
  import("./screens/Notifications/Notifications")
);
const LanguageSelection = loadable(() =>
  import("./screens/LanguageSelection/LanguageSelection")
);
const CurrencySelection = loadable(() =>
  import("./screens/CurrencySelection/CurrencySelection")
);
const AdminViewGoodDeal = loadable(() =>
  import("./screens/AdminViewGoodDeal/AdminViewGoodDeal")
);
const MyInformation = loadable(() =>
  import("./screens/MyInformation/MyInformation")
);
const ArtisanDeniedTheScreen = loadable(() =>
  import("./screens/ArtisanDenied/ArtisanDenied")
);
const ArtisanConfirmTheScreen = loadable(() =>
  import("./screens/ArtisanConfirmed/ArtisanConfirmed")
);
const GuestsSendReviewsScreen = loadable(() =>
  import("./screens/GuestSendReview/GuestSendReview")
);
const ArtisanEmailScreen = loadable(() =>
  import("./screens/ArtisanEmailScreen/ArtisanEmailScreen")
);
const ArtisanEmailList = loadable(() =>
  import("./components/ArtisanEmailList")
);
const GuestEmailAskForScreen = loadable(() =>
  import("./screens/AskGuestReview/AskGuestReview")
);
const LostPassword = loadable(() =>
  import("./screens/LostPassword/LostPassword")
);
const ResetPassword = loadable(() =>
  import("./screens/ResetPassword/ResetPassword")
);
const CustomLoader = loadable(() =>
  import("./components/CustomLoader/CustomLoader")
);
const ProtectedRoute = loadable(
  () => import("./components/ProtectedRoute/ProtectedRoute"),
  {
    fallback: <CustomLoader />,
  }
);

// App component
function App() {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoginStatus = async () => {
      await dispatch(checkUserLoginStatus());
      setIsReady(true);
    };
    checkLoginStatus();
  }, [dispatch]);

  if (!isReady) {
    return <CustomLoader />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/auth",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <Auth />
        </Suspense>
      ),
    },
    {
      path: "/verify",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <VerificationOTP />
        </Suspense>
      ),
    },
    {
      path: "/account",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<Account />} />
        </Suspense>
      ),
    },
    {
      path: "/create-deal",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<CreateDeal />} />
        </Suspense>
      ),
    },
    {
      path: "/inform-deal",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<InformToCraftsMan />} />
        </Suspense>
      ),
    },
    {
      path: "/thanks-admin",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<ThanksToAdmin />} />
        </Suspense>
      ),
    },
    {
      path: "/admin-active-deal",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<ActiveDeal />} />
        </Suspense>
      ),
    },
    {
      path: "/admin-waiting-deal",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<WaitingDeal />} />
        </Suspense>
      ),
    },
    {
      path: "/admin-draft-deal",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<DraftDeal />} />
        </Suspense>
      ),
    },
    {
      path: "/admin-wallet",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<Wallet />} />
        </Suspense>
      ),
    },
    {
      path: "/admin-withdrawal",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<Withdrawal />} />
        </Suspense>
      ),
    },
    {
      path: "/thanks-withdrawal",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<ThanksForWithdrawal />} />
        </Suspense>
      ),
    },
    {
      path: "/admin-invitations",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<Invitations />} />
        </Suspense>
      ),
    },
    {
      path: "/admin-orders",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<Orders />} />
        </Suspense>
      ),
    },
    {
      path: "/admin-view-deal",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<AdminViewGoodDeal />} />
        </Suspense>
      ),
    },
    {
      path: "/invite-loved-ones",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<InviteLovedOnes />} />
        </Suspense>
      ),
    },
    {
      path: "/admin-invitations-sent",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<InvitationSent />} />
        </Suspense>
      ),
    },
    {
      path: "/guest-deal-view",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<GuestDealView />} />
        </Suspense>
      ),
    },
    {
      path: "/about-us",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <AboutUs />
        </Suspense>
      ),
    },
    {
      path: "/how-it-works",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <HowItWorks />
        </Suspense>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ContactUs />
        </Suspense>
      ),
    },
    {
      path: "/side-bar",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <SideBar />
        </Suspense>
      ),
    },
    {
      path: "/help-me",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <PublicNeedHelp />
        </Suspense>
      ),
    },
    {
      path: "/settings",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<SettingsPage />} />
        </Suspense>
      ),
    },
    {
      path: "/edit-profile",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<EditProfile />} />
        </Suspense>
      ),
    },
    {
      path: "/notifications",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<Notifications />} />
        </Suspense>
      ),
    },
    {
      path: "/select-language",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <LanguageSelection />
        </Suspense>
      ),
    },
    {
      path: "/select-currency",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <CurrencySelection />
        </Suspense>
      ),
    },
    {
      path: "/my-information",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<MyInformation />} />
        </Suspense>
      ),
    },
    {
      path: "/artisan-denied-deal",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<ArtisanDeniedTheScreen />} />
        </Suspense>
      ),
    },
    {
      path: "/artisan-confirmed-deal",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<ArtisanConfirmTheScreen />} />
        </Suspense>
      ),
    },
    {
      path: "/guest-send-review",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<GuestsSendReviewsScreen />} />
        </Suspense>
      ),
    },
    {
      path: "/artisan-email",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<ArtisanEmailScreen />} />
        </Suspense>
      ),
    },
    {
      path: "/artisan-email-list",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<ArtisanEmailList />} />
        </Suspense>
      ),
    },
    {
      path: "/ask-guest-review",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ProtectedRoute element={<GuestEmailAskForScreen />} />
        </Suspense>
      ),
    },
    {
      path: "/lost-password",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <LostPassword />
        </Suspense>
      ),
    },
    {
      path: "/reset-password",
      element: (
        <Suspense fallback={<CustomLoader />}>
          <ResetPassword />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<CustomLoader />} />;
}

export default App;
