import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          TanStack Router
        </Link>{' '}
        <Link to="/instalation" className="[&.active]:font-bold">
          Instalation
        </Link>{' '}
        <Link to="/navigation" className="[&.active]:font-bold">
          Navigation
        </Link>{' '}
        <Link to="/protectedRoutes" className="[&.active]:font-bold">
          Protected Routes
        </Link>{' '}
        <Link to="/apiImplementation" className="[&.active]:font-bold">
          Api Implementation
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),

})