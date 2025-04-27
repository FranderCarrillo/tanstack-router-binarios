import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
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
          TanStack Router
        </Link>{' '}
        <Link to="/navigation" className="[&.active]:font-bold">
          Navigation
        </Link>{' '}
        <Link to="/protectedRoutes" className="[&.active]:font-bold">
          Protected Routes
        </Link>{' '}
        {/* <Link to="/profile" className="[&.active]:font-bold">
          Profile
        </Link> */}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),

})