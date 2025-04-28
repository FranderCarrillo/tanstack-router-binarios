import { createFileRoute, useRouter } from '@tanstack/react-router';
import { isAuthenticated, signIn, signOut } from '../utils/auth';
import '/src/App.css';
import { useContext } from 'react';
import ProfileContext from '../Context/ProfileContext';

export const Route = createFileRoute('/login')({
  component: Login,
});

function Login() {
  const router = useRouter();
  const {setUsername, username} = useContext(ProfileContext);

  const handleChangeLogin = () => {
    setUsername("Login");                                           
  }


  return (
    <div className="login-container">
      <h2 className="login-title">Welcome to the Login Page</h2>

      {isAuthenticated() ? (
        <div className="login-content">
          <p className="login-message">Hello, {username}! 🎉</p>
          <button
            className="logout-button"
            onClick={async () => {
              signOut();
              router.invalidate();
              handleChangeLogin();
            }} 
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="login-content">
          <p className="login-message">Please sign in to continue 🚀</p>
          <button
            className="login-button"
            onClick={async () => {
              signIn();
              router.invalidate();
              await router.navigate({ to: '/profile' }); 
            }}
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
}
