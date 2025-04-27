import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/apiExample/user')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/apiExample/user"!</div>
}
