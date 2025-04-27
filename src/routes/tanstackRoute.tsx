import { createFileRoute } from '@tanstack/react-router'
import TanstackRouterInfo from '../components/TanstackRouterInfo'

export const Route = createFileRoute('/tanstackRoute')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TanstackRouterInfo/>
}
