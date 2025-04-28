import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AuthContext } from '../hooks/useAuth';

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
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About Us
        </Link>{' '}
        <Link to="/contacUs" className="[&.active]:font-bold">
          Contact Us
        </Link>{' '}
        <Link to="/profile" className="[&.active]:font-bold">
          Profile
        </Link>
        <div id='login'>
          <Link to="/login" activeProps={activeProps} className="[&.active]:font-bold">
            Login
          </Link>
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),

})