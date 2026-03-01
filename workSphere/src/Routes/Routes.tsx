import { Navigate, Route, Routes } from "react-router-dom";
import NothingFound from "../components/NothingFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feed" element={<div>My Task</div>} />
        <Route path="/mytask" element={<div>My Task</div>} />
        <Route path="/teamsheet" element={<div>Team Sheet</div>} />
        <Route path="/request" element={<div>Request</div>} />
        <Route path="/buddy" element={<div>Buddy</div>} />
        <Route path="/timesheet" element={<div>TimeSheet</div>} />
        <Route path="/chitchat" element={<div>ChitChat</div>} />
        <Route path="/calendar" element={<div>Calendar</div>} />
        <Route path="/notifications" element={<div>Notifications</div>} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route
          path="/projectmanagement"
          element={<div>Project Management</div>}
        />
      </Route>
      <Route path="/pagenotfound" element={<NothingFound />} />
      <Route path="*" element={<Navigate to="/pagenotfound" replace />} />
    </Routes>
  );
};

export default AppRoutes;
