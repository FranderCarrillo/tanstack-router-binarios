import { createFileRoute } from '@tanstack/react-router'
import ProfileGuide from '../components/ProfileGuide'

export const Route = createFileRoute('/apiImplementation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProfileGuide />
}
