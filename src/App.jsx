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
import { Legal } from "./screens/Legal";
import { useTranslation } from "react-i18next";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import DeleteAccount from "./screens/DeleteAccount";
import TermsOfUse from "./screens/TermsOfUse/TermsOfUse";

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
const Message = loadable(() => import("./screens/Message/Message"));
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

// Layout component to include AppBar across all routes
function Layout({ children }) {
  return (
    <div className="flex flex-col w-full h-full items-start relative bg-primary-background min-h-screen">
      <AppBar />
      <Suspense fallback={<CustomLoader />}>{children}</Suspense>
    </div>
  );
}

// App component
function App() {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const { t } = useTranslation(); // Initialize the translation hook
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    // fetch("/api/config").then(async (r) => {
    // const { publishableKey } = await r.json();
    setStripePromise(
      loadStripe(
        "pk_test_51PplNp04KHQUtznoy8HmY5meaJK4aZgRjwuckLfjquqCSJMvfXEjacj3pADbzg2SDbNuWr0zRhrFymRRstAjzh3S00USzDZqAJ"
      )
    );
    // });
  }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      await dispatch(checkUserLoginStatus());
      setIsReady(true);
    };
    checkLoginStatus();
  }, [dispatch, isUserLoggedIn]);

  if (!isReady) {
    return <CustomLoader />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          {!isUserLoggedIn ? (
            <Home />
          ) : (
            <ProtectedRoute element={<Account />} />
          )}
        </Layout>
      ),
    },
    {
      path: "/auth",
      element: (
        <Layout>
          <Auth />
        </Layout>
      ),
    },
    {
      path: "/verify",
      element: (
        <Layout>
          <VerificationOTP />
        </Layout>
      ),
    },
    {
      path: "/create-deal",
      element: (
        <Layout>
          <ProtectedRoute element={<CreateDeal />} />
        </Layout>
      ),
    },
    {
      path: "/inform-deal",
      element: (
        <Layout>
          <ProtectedRoute element={<InformToCraftsMan />} />
        </Layout>
      ),
    },
    {
      path: "/thanks-admin",
      element: (
        <Layout>
          <ProtectedRoute element={<ThanksToAdmin />} />
        </Layout>
      ),
    },
    {
      path: "/request-sent",
      element: (
        <Layout>
          <ProtectedRoute
            element={
              <Message
                heading="It’s sent! . 🎉"
                description="Your request has been sent to the organiser. You will be notified when the organiser accepts or refuses your request."
                action={t("lostPassword.checkEmailAction")}
              />
            }
          />
        </Layout>
      ),
    },
    {
      path: "/admin-active-deal",
      element: (
        <Layout>
          <ProtectedRoute element={<ActiveDeal />} />
        </Layout>
      ),
    },
    {
      path: "/admin-waiting-deal",
      element: (
        <Layout>
          <ProtectedRoute element={<WaitingDeal />} />
        </Layout>
      ),
    },
    {
      path: "/admin-draft-deal",
      element: (
        <Layout>
          <ProtectedRoute element={<DraftDeal />} />
        </Layout>
      ),
    },
    {
      path: "/admin-wallet",
      element: (
        <Layout>
          <ProtectedRoute element={<Wallet />} />
        </Layout>
      ),
    },
    {
      path: "/admin-withdrawal",
      element: (
        <Layout>
          <ProtectedRoute
            element={
              <Withdrawal
                heading="Validation of withdrawal"
                btnText="Validate the withdrawal"
              />
            }
          />
        </Layout>
      ),
    },
    {
      path: "/payment",
      element: (
        <Layout>
          <ProtectedRoute
            element={
              <Withdrawal
                heading="Provide Payment Details"
                btnText="Validate Payment"
                stripePromise={stripePromise}
              />
            }
          />
        </Layout>
      ),
    },
    {
      path: "/thanks-withdrawal",
      element: (
        <Layout>
          <ProtectedRoute element={<ThanksForWithdrawal />} />
        </Layout>
      ),
    },
    {
      path: "/admin-invitations",
      element: (
        <Layout>
          <ProtectedRoute element={<Invitations />} />
        </Layout>
      ),
    },
    {
      path: "/admin-orders",
      element: (
        <Layout>
          <ProtectedRoute element={<Orders />} />
        </Layout>
      ),
    },
    {
      path: "/admin-view-deal",
      element: (
        <Layout>
          <ProtectedRoute element={<AdminViewGoodDeal />} />
        </Layout>
      ),
    },
    {
      path: "/invite-loved-ones",
      element: (
        <Layout>
          <ProtectedRoute element={<InviteLovedOnes />} />
        </Layout>
      ),
    },
    {
      path: "/admin-invitations-sent",
      element: (
        <Layout>
          <ProtectedRoute element={<InvitationSent />} />
        </Layout>
      ),
    },
    {
      path: "/guest-deal-view",
      element: (
        <Layout>
          <ProtectedRoute element={<GuestDealView />} />
        </Layout>
      ),
    },
    {
      path: "/about-us",
      element: (
        <Layout>
          <AboutUs />
        </Layout>
      ),
    },
    {
      path: "/how-it-works",
      element: (
        <Layout>
          <HowItWorks />
        </Layout>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <Layout>
          <ContactUs />
        </Layout>
      ),
    },
    {
      path: "/help-me",
      element: (
        <Layout>
          <PublicNeedHelp />
        </Layout>
      ),
    },
    {
      path: "/settings",
      element: (
        <Layout>
          <ProtectedRoute element={<SettingsPage />} />
        </Layout>
      ),
    },
    {
      path: "/edit-profile",
      element: (
        <Layout>
          <ProtectedRoute element={<EditProfile />} />
        </Layout>
      ),
    },
    {
      path: "/notifications",
      element: (
        <Layout>
          <ProtectedRoute element={<Notifications />} />
        </Layout>
      ),
    },
    {
      path: "/terms-of-use",
      element: (
        <Layout>
          <ProtectedRoute element={<TermsOfUse />} />
        </Layout>
      ),
    },
    {
      path: "/select-language",
      element: (
        <Layout>
          <LanguageSelection />
        </Layout>
      ),
    },
    {
      path: "/select-currency",
      element: (
        <Layout>
          <CurrencySelection />
        </Layout>
      ),
    },
    {
      path: "/my-information",
      element: (
        <Layout>
          <ProtectedRoute element={<MyInformation />} />
        </Layout>
      ),
    },
    {
      path: "/artisan-validation",
      element: (
        <Layout>
          <ArtisanConfirmTheScreen />
        </Layout>
      ),
    },
    {
      path: "/deal_details",
      element: (
        <Layout>
          <ArtisanConfirmTheScreen />
        </Layout>
      ),
    },
    {
      path: "/deal-confirmed",
      element: (
        <Layout>
          <Message
            heading={t("artisanApproved.heading")}
            description={t("artisanApproved.description")}
            action={t("artisanApproved.action")}
          />
        </Layout>
      ),
    },
    {
      path: "/delete-account",
      element: (
        <Layout>
          <DeleteAccount />
        </Layout>
      ),
    },
    {
      path: "/delete-account-message",
      element: (
        <Layout>
          <Message
            heading="It's deleted! 🗑️"
            description={`This is just goodbye!\nCome back whenever you want.`}
            action={t("artisanApproved.action")}
          />
        </Layout>
      ),
    },
    {
      path: "/deal-refused",
      element: (
        <Layout>
          <ArtisanDeniedTheScreen />
        </Layout>
      ),
    },
    {
      path: "/deal-refused-message",
      element: (
        <Layout>
          <Message
            heading={t("artisanRefused.heading")}
            description={t("artisanRefused.description")}
            action={t("artisanRefused.action")}
          />
        </Layout>
      ),
    },
    {
      path: "/guest-send-review",
      element: (
        <Layout>
          <ProtectedRoute element={<GuestsSendReviewsScreen />} />
        </Layout>
      ),
    },
    {
      path: "/artisan-send-review",
      element: (
        <Layout>
          <GuestsSendReviewsScreen />
        </Layout>
      ),
    },
    {
      path: "/artisan-email",
      element: (
        <Layout>
          <ProtectedRoute element={<ArtisanEmailScreen />} />
        </Layout>
      ),
    },
    {
      path: "/artisan-email-list",
      element: (
        <Layout>
          <ProtectedRoute element={<ArtisanEmailList />} />
        </Layout>
      ),
    },
    {
      path: "/ask-guest-review",
      element: (
        <Layout>
          <ProtectedRoute element={<GuestEmailAskForScreen />} />
        </Layout>
      ),
    },
    {
      path: "/general-conditions",
      element: (
        <Layout>
          <ProtectedRoute
            element={<Legal heading="General conditions of sale" content="" />}
          />
        </Layout>
      ),
    },
    {
      path: "/privacy-policy",
      element: (
        <Layout>
          <Legal heading="Privacy policy" content="" />
        </Layout>
      ),
    },
    {
      path: "/newsletter-indication",
      element: (
        <Layout>
          <Legal heading="Newsletter indication" content="" />
        </Layout>
      ),
    },
    {
      path: "/lost-password",
      element: (
        <Layout>
          <LostPassword />
        </Layout>
      ),
    },
    {
      path: "/check-email",
      element: (
        <Layout>
          <Message
            heading={t("lostPassword.checkEmailHead")}
            description={t("lostPassword.checkEmailDesc")}
            action={t("lostPassword.checkEmailAction")}
          />
        </Layout>
      ),
    },
    {
      path: "/reset-password",
      element: (
        <Layout>
          <ResetPassword />
        </Layout>
      ),
    },
    {
      path: "/reset-password-success",
      element: (
        <Layout>
          <Message
            heading={t("resetPassword.resetHead")}
            description={t("resetPassword.resetDesc")}
            action={t("resetPassword.resetAction")}
          />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<CustomLoader />} />;
}

export default App;
