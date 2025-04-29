import { createFileRoute, redirect } from '@tanstack/react-router'
import { useGetUser } from '../services/User/userHook'

import ProfileInfo from '../components/ProfileInfo';
import { useContext } from 'react';
import ProfileContext from '../Context/ProfileContext';


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
  const {setUsername} = useContext(ProfileContext);
  setUsername(user.name);

  return (
    <ProfileInfo User={user}/>
  );
}
