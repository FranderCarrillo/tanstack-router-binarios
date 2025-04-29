import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AuthContext } from '../hooks/useAuth';
import { useContext } from 'react';
import ProfileContext from '../Context/ProfileContext';

type RouterContext = {
  authentication: AuthContext;
};

const activeProps = {
  style: {
    fontWeight: "bold",
    color: "black",
  },
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    const { username } = useContext(ProfileContext);
    return (
      <>
        <div className="p-2 flex gap-2 navbar">
          <Link to="/" activeProps={activeProps} className="[&.active]:font-bold">
            Inicio
          </Link>{' '}
          <Link to="/about" activeProps={activeProps} className="[&.active]:font-bold">
            Sobre Nosotros
          </Link>{' '}
          <Link to="/contacUs" activeProps={activeProps} className="[&.active]:font-bold">
            Contacto
          </Link>{' '}
          <Link to="/profile" activeProps={activeProps} className="[&.active]:font-bold">
            Perfil
          </Link>
          <div id='login'>
            <Link to="/login" activeProps={activeProps} className="[&.active]:font-bold">
              {username}
            </Link>
          </div>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },

})