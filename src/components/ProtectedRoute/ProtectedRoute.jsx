import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkUserLoginStatus } from "../../redux/app/user/userSlice";
import CustomLoader from "../CustomLoader/CustomLoader";

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
    return <CustomLoader />;
  }

  if (!isUserLoggedIn) {
    return <Navigate to="/auth?login" />;
  }

  return element;
}

export default ProtectedRoute;
