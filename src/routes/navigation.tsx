import { createFileRoute } from '@tanstack/react-router'
import NavigationInfo from '../components/NavigationInfo'

export const Route = createFileRoute('/navigation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <NavigationInfo />
  </div>
}
