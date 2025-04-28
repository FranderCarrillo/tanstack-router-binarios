import { createFileRoute } from '@tanstack/react-router'
import AboutInfo from '../components/AboutInfo'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><AboutInfo/></div>
}
