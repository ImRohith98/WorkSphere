import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
  allowedRoles?: Array<"admin" | "user">;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const localValues = localStorage.getItem("token");

  if (!localValues) {
    return <Navigate to="/login" replace />;
  }
  if (
    JSON.parse(localValues) &&
    allowedRoles &&
    allowedRoles.includes(JSON.parse(localValues).role)
  ) {
    return <Navigate to="/pagenotfound" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
