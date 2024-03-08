import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <UserProfile path="/userProfile" routing="path" />
);

export default UserProfilePage;
