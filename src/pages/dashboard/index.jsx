import { useGetCurrentUser } from "@/shared/hooks/useGetCurrentUser";

const Dashboard = () => {
  const { currentUser } = useGetCurrentUser();
  return (
    <div>hello {currentUser?.firstName + " " + currentUser?.lastName}</div>
  );
};

export default Dashboard;
