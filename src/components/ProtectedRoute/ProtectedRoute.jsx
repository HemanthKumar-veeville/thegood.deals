import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkUserLoginStatus } from "../../redux/app/user/userSlice";
import CustomLoader from "../CustomLoader/CustomLoader";
import { fetchUserProfile } from "../../redux/app/account/accountSlice";

function ProtectedRoute({ element }) {
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const isUserActivated = useSelector((state) => state.user.isUserActivated);
  const user = useSelector((state) => state.account.profile);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      await dispatch(checkUserLoginStatus());
      await dispatch(fetchUserProfile());

      setLoading(false);
    };
    checkLoginStatus();
  }, [dispatch]);

  if (loading) {
    return <CustomLoader />;
  }

  if (!isUserActivated)
    return <Navigate to={`/verify?email=${user?.data?.email}`} />;

  if (!isUserLoggedIn) {
    return <Navigate to="/auth?login" />;
  }

  return element;
}

export default ProtectedRoute;
