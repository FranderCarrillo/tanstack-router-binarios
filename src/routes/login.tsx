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
      <h2 className="login-title">Bienvenido a AutoVentas</h2>

      {isAuthenticated() ? (
        <div className="login-content">
          <p className="login-message">Hola, {username}! 🎉</p>
          <button
            className="logout-button"
            onClick={async () => {
              signOut();
              router.invalidate();
              handleChangeLogin();
            }} 
          >
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <div className="login-content">
          <p className="login-message">Por favor, inicie sesión para continuar 🚀</p>
          <button
            className="login-button"
            onClick={async () => {
              signIn();
              router.invalidate();
              await router.navigate({ to: '/profile' }); 
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      )}
    </div>
  );
}
