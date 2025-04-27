import { createFileRoute, redirect } from '@tanstack/react-router'
import { useGetUser } from '../services/User/userHook'
import UserCard from '../card/user/UserCard';
import ProfileGuide from '../components/ProfileGuide';

export const Route = createFileRoute('/profile')({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: Profile,
})

function Profile() {
  const {user} = useGetUser(1);
  return (
    <div>
      <UserCard user={user} />
      <br />
      <br />
      <ProfileGuide />
    </div>
  );
}
