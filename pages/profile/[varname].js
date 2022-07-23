import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { varname } = router.query;
  return (
    <div>
      <h1>Hello {varname}</h1>
    </div>
  );
};

export default Profile;
