import { useAuth } from "../../Routes/Authcontext";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return <div>{user?.name}</div>;
};

export default Dashboard;
