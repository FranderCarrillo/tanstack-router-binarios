import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/instalation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/instalation"!</div>
}
