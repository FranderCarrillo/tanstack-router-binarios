import { createFileRoute } from '@tanstack/react-router'
import ProtectedRoutesInfo from '../components/ProtectedRoutesInfo'

export const Route = createFileRoute('/protectedRoutes')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    <ProtectedRoutesInfo />
  </div>
  );
}
