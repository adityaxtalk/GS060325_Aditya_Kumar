import React, { JSX } from "react";
import { Navigate} from 'react-router';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface ProtectedRouteProps {
    element: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({element}) => {
  const userInfo = useSelector((state:RootState)=> state.auth.userInfo);
  const isAuthenticated = !!userInfo?.email;
  return isAuthenticated? element : <Navigate to="/"/>
}

export default ProtectedRoute;