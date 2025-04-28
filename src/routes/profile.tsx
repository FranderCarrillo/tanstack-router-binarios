import { createFileRoute, redirect } from '@tanstack/react-router'
import { useGetUser } from '../services/User/userHook'
import UserCard from '../card/user/UserCard';
import ProfileInfo from '../components/ProfileInfo';


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
  return (
  <>
    <ProfileInfo />
  </>
  
  );
}
