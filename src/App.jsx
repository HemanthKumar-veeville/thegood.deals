import React, { useEffect, useState, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkUserLoginStatus } from "./redux/app/user/userSlice";
import "./App.css";
import loadable from "@loadable/component";
import { useTranslation } from "react-i18next";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import DeleteAccount from "./screens/DeleteAccount";
import TermsOfUse from "./screens/TermsOfUse/TermsOfUse";
import { GeneralConditionsScreen } from "./screens/GeneralConditions";
import { PrivacyCookiePolicy } from "./components/PrivacyCookiePolicy";
import { PrivacyCookiePolicyScreen } from "./screens/PrivacyCookiePolicy";
import { LegalNotices } from "./components/LegalNotices";
import { LegalNoticesScreen } from "./screens/LegalNoticesScreen";
import InviteParticipants from "./screens/InviteParticipants/InviteParticipants";
import { NewsLetterScreen } from "./screens/NewsLetterScreen/NewsLetterScreen";
import UpdateDeal from "./screens/UpdateDeal/UpdateDeal";
import RepostDeal from "./screens/RepostDeal/RepostDeal";
import DealWallet from "./screens/DealWallet/DealWallet";
import { STRIPE_PK } from "./config";
import RequestPendingDeal from "./screens/RequestPendingDeal/RequestPendingDeal";
import ThanksForReview from "./screens/ThanksForReview/ThanksForReview";
import NotFound from "./screens/NotFound/NotFound";
import { InstallButton } from "./components/InstallButton";

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
const ThanksToArtisan = loadable(() =>
  import("./screens/ThanksToArtisan/ThanksToArtisan")
);
const Message = loadable(() => import("./screens/Message/Message"));
const ActiveDeal = loadable(() => import("./screens/ActiveDeal/ActiveDeal"));
const DraftDeal = loadable(() => import("./screens/DraftDeal/DraftDeal"));
const WaitingDeal = loadable(() => import("./screens/WaitingDeal/WaitingDeal"));
const Wallet = loadable(() => import("./screens/Wallet/Wallet"));
const Withdrawal = loadable(() => import("./screens/Withdrawal/Withdrawal"));
const Invitations = loadable(() => import("./screens/Invitations/Invitations"));
const Orders = loadable(() => import("./screens/Orders/Orders"));

const ThanksForWithdrawal = loadable(() =>
  import("./screens/ThanksForWithdrawal/ThanksForWithdrawal")
);
const ThanksPayment = loadable(() =>
  import("./screens/ThanksPayment/ThanksPayment")
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
const AppBar = loadable(() => import("./components/AppBar/AppBar"), {
  fallback: <CustomLoader />,
});

// Base layout component shared by all routes
function BaseLayout({ children, footerContent = null }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-start relative bg-primary-background min-h-screen notranslate">
      <AppBar />
      <Suspense fallback={<CustomLoader />}>{children}</Suspense>
      {footerContent}
    </div>
  );
}

// Root layout for pages that should display the PWA install button
function RootLayout({ children }) {
  return (
    <BaseLayout footerContent={<InstallButton position="banner" variant="primary" />}>
      {children}
    </BaseLayout>
  );
}

// App component
function App() {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const isRequestSent = useSelector((state) => state.user.isRequestSent);
  const dealId = useSelector((state) => state.user.dealId);
  const { t } = useTranslation();
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    setStripePromise(loadStripe(STRIPE_PK));
  }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      setIsReady(false);
      try {
        await dispatch(checkUserLoginStatus());
      } catch (error) {
        console.error("Error checking login status:", error);
      } finally {
        setIsReady(true);
      }
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
        <RootLayout>
          {!isUserLoggedIn ? (
            <Home />
          ) : (
            <ProtectedRoute
              element={
                <Account isRequestSent={isRequestSent} dealId={dealId} />
              }
            />
          )}
        </RootLayout>
      ),
    },
    {
      path: "/auth",
      element: (
        <BaseLayout>
          <Auth />
        </BaseLayout>
      ),
    },
    {
      path: "/verify",
      element: (
        <BaseLayout>
          <VerificationOTP />
        </BaseLayout>
      ),
    },
    {
      path: "/create-deal",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<CreateDeal />} />
        </BaseLayout>
      ),
    },
    {
      path: "/update-deal",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<UpdateDeal />} />
        </BaseLayout>
      ),
    },
    {
      path: "/repost-deal",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<RepostDeal />} />
        </BaseLayout>
      ),
    },
    {
      path: "/inform-deal",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<InformToCraftsMan />} />
        </BaseLayout>
      ),
    },
    {
      path: "/thanks-admin",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<ThanksToAdmin />} />
        </BaseLayout>
      ),
    },
    {
      path: "/thanks-review",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<ThanksForReview />} />
        </BaseLayout>
      ),
    },
    {
      path: "/thanks-order-confirmed",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<ThanksToArtisan />} />
        </BaseLayout>
      ),
    },
    {
      path: "/request-sent",
      element: (
        <BaseLayout>
          <ProtectedRoute
            element={
              <Message
                heading={t("App.Message.requestSent.heading")}
                description={t("App.Message.requestSent.description")}
                action={t("App.Message.lostPassword.checkEmailAction")}
              />
            }
          />
        </BaseLayout>
      ),
    },
    {
      path: "/admin-active-deal",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<ActiveDeal />} />
        </BaseLayout>
      ),
    },
    {
      path: "/admin-waiting-deal",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<WaitingDeal />} />
        </BaseLayout>
      ),
    },
    {
      path: "/request-pending-deal",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<RequestPendingDeal />} />
        </BaseLayout>
      ),
    },
    {
      path: "/admin-draft-deal",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<DraftDeal />} />
        </BaseLayout>
      ),
    },
    {
      path: "/admin-wallet",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<Wallet />} />
        </BaseLayout>
      ),
    },
    {
      path: "/deal-wallet",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<DealWallet />} />
        </BaseLayout>
      ),
    },
    {
      path: "/admin-withdrawal",
      element: (
        <BaseLayout>
          <ProtectedRoute
            element={
              <Withdrawal
                heading={t("App.Withdrawal.adminWithdrawal.heading")}
                btnText={t("App.Withdrawal.adminWithdrawal.btnText")}
              />
            }
          />
        </BaseLayout>
      ),
    },
    {
      path: "/payment",
      element: (
        <BaseLayout>
          <ProtectedRoute
            element={
              <Withdrawal
                heading={t("App.Withdrawal.payment.heading")}
                btnText={t("App.Withdrawal.payment.btnText")}
                stripePromise={stripePromise}
              />
            }
          />
        </BaseLayout>
      ),
    },
    {
      path: "/thanks-withdrawal",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<ThanksForWithdrawal />} />
        </BaseLayout>
      ),
    },
    {
      path: "/thanks-payment-setup",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<ThanksPayment />} />
        </BaseLayout>
      ),
    },
    {
      path: "/admin-invitations",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<Invitations />} />
        </BaseLayout>
      ),
    },
    {
      path: "/admin-orders",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<Orders />} />
        </BaseLayout>
      ),
    },
    {
      path: "/admin-view-deal",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<AdminViewGoodDeal />} />
        </BaseLayout>
      ),
    },
    {
      path: "/invite-loved-ones",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<InviteLovedOnes />} />
        </BaseLayout>
      ),
    },
    {
      path: "/help-request-sent",
      element: (
        <BaseLayout>
          <InvitationSent
            description={t("App.InvitationSent.helpRequest.sentDescription")}
          />
        </BaseLayout>
      ),
    },
    {
      path: "/admin-invitations-sent",
      element: (
        <BaseLayout>
          <InvitationSent />
        </BaseLayout>
      ),
    },
    {
      path: "/guest-deal-view",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<GuestDealView />} />
        </BaseLayout>
      ),
    },
    {
      path: "/about-us",
      element: (
        <BaseLayout>
          <AboutUs />
        </BaseLayout>
      ),
    },
    {
      path: "/how-it-works",
      element: (
        <BaseLayout>
          <HowItWorks />
        </BaseLayout>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <BaseLayout>
          <ContactUs />
        </BaseLayout>
      ),
    },
    {
      path: "/help-me",
      element: (
        <BaseLayout>
          <PublicNeedHelp />
        </BaseLayout>
      ),
    },
    {
      path: "/settings",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<SettingsPage />} />
        </BaseLayout>
      ),
    },
    {
      path: "/edit-profile",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<EditProfile />} />
        </BaseLayout>
      ),
    },
    {
      path: "/notifications",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<Notifications />} />
        </BaseLayout>
      ),
    },
    {
      path: "/terms-of-use",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<TermsOfUse />} />
        </BaseLayout>
      ),
    },
    {
      path: "/select-language",
      element: (
        <BaseLayout>
          <LanguageSelection />
        </BaseLayout>
      ),
    },
    {
      path: "/select-currency",
      element: (
        <BaseLayout>
          <CurrencySelection />
        </BaseLayout>
      ),
    },
    {
      path: "/my-information",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<MyInformation />} />
        </BaseLayout>
      ),
    },
    {
      path: "/artisan-validation",
      element: (
        <BaseLayout>
          <ArtisanConfirmTheScreen />
        </BaseLayout>
      ),
    },
    {
      path: "/deal_details",
      element: (
        <BaseLayout>
          <ArtisanConfirmTheScreen />
        </BaseLayout>
      ),
    },
    {
      path: "/deal_details_invite",
      element: (
        <BaseLayout>
          <InviteParticipants />
        </BaseLayout>
      ),
    },
    {
      path: "/deal-confirmed",
      element: (
        <BaseLayout>
          <Message
            heading={t("App.Message.artisanApproved.heading")}
            description={t("App.Message.artisanApproved.description")}
            action={t("App.Message.artisanApproved.action")}
          />
        </BaseLayout>
      ),
    },
    {
      path: "/delete-account",
      element: (
        <BaseLayout>
          <DeleteAccount />
        </BaseLayout>
      ),
    },
    {
      path: "/delete-account-message",
      element: (
        <BaseLayout>
          <Message
            heading={t("App.Message.deleteAccount.heading")}
            description={t("App.Message.deleteAccount.description")}
            action={t("App.Message.deleteAccount.action")}
          />
        </BaseLayout>
      ),
    },
    {
      path: "/deal-refused",
      element: (
        <BaseLayout>
          <ArtisanDeniedTheScreen />
        </BaseLayout>
      ),
    },
    {
      path: "/deal-refused-message",
      element: (
        <BaseLayout>
          <Message
            heading={t("App.Message.artisanRefused.heading")}
            description={t("App.Message.artisanRefused.description")}
            action={t("App.Message.artisanRefused.action")}
          />
        </BaseLayout>
      ),
    },
    {
      path: "/participant-send-review",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<GuestsSendReviewsScreen />} />
        </BaseLayout>
      ),
    },
    {
      path: "/organizer-send-review",
      element: (
        <BaseLayout>
          <GuestsSendReviewsScreen />
        </BaseLayout>
      ),
    },
    {
      path: "/artisan-email",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<ArtisanEmailScreen />} />
        </BaseLayout>
      ),
    },
    {
      path: "/artisan-email-list",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<ArtisanEmailList />} />
        </BaseLayout>
      ),
    },
    {
      path: "/ask-guest-review",
      element: (
        <BaseLayout>
          <ProtectedRoute element={<GuestEmailAskForScreen />} />
        </BaseLayout>
      ),
    },
    {
      path: "/general-conditions",
      element: (
        <BaseLayout>
          <GeneralConditionsScreen />
        </BaseLayout>
      ),
    },
    {
      path: "/privacy-policy",
      element: (
        <BaseLayout>
          <PrivacyCookiePolicyScreen />
        </BaseLayout>
      ),
    },
    {
      path: "/newsletter-indication",
      element: (
        <BaseLayout>
          <NewsLetterScreen />
        </BaseLayout>
      ),
    },
    {
      path: "/legal-notices",
      element: (
        <BaseLayout>
          <LegalNoticesScreen />
        </BaseLayout>
      ),
    },
    {
      path: "/lost-password",
      element: (
        <BaseLayout>
          <LostPassword />
        </BaseLayout>
      ),
    },
    {
      path: "/check-email",
      element: (
        <BaseLayout>
          <Message
            heading={t("App.Message.lostPassword.checkEmailHead")}
            description={t("App.Message.lostPassword.checkEmailDesc")}
            action={t("App.Message.lostPassword.checkEmailAction")}
          />
        </BaseLayout>
      ),
    },
    {
      path: "/reset-password",
      element: (
        <BaseLayout>
          <ResetPassword />
        </BaseLayout>
      ),
    },
    {
      path: "/reset-password-success",
      element: (
        <BaseLayout>
          <Message
            heading={t("App.Message.resetPassword.resetHead")}
            description={t("App.Message.resetPassword.resetDesc")}
            action={t("App.Message.resetPassword.resetAction")}
          />
        </BaseLayout>
      ),
    },
    {
      path: "*",
      element: (
        <BaseLayout>
          <NotFound />
        </BaseLayout>
      ),
    },
    {
      path: "/index.html",
      element: <Navigate to="/" replace />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} fallbackElement={<CustomLoader />} />
    </>
  );
}

export default App;
