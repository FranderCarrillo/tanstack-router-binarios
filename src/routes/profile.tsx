import { createFileRoute, redirect, useRouter } from '@tanstack/react-router'
import { useGetUser } from '../services/User/userHook'
import '../components/profile.css';
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
  const { user } = useGetUser(1);
  const router = useRouter();
  
  return (
    <ProfileInfo User={user} router={router} />
  );
}
