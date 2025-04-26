import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contacUs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='p-2'>Hello "/contacUs"!</div>
}
