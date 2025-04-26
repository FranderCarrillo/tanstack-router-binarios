import { createRootRoute, createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AuthContext } from '../hooks/useAuth';

type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>{' '}
        <Link to="/contacUs" className="[&.active]:font-bold">
          ContacUs
        </Link>{' '}
        <Link to="/login" className="[&.active]:font-bold">
          Login
        </Link>

      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),

})