import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const activeProps = {
  style: {
    fontWeight: "bold",
    color: "white",
  },
};

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 navbar">
        <Link to="/" activeProps={activeProps}>
          TanStack Router
        </Link>{' '}
        <Link to="/instalation" activeProps={activeProps}>
          Instalación
        </Link>{' '}
        <Link to="/navigation" activeProps={activeProps}>
          Navigation
        </Link>{' '}
        <Link to="/protectedRoutes" activeProps={activeProps}>
          Protected Routes
        </Link>{' '}
        <Link to="/apiImplementation" activeProps={activeProps}>
          Implemetación API
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),

})