import { createFileRoute } from '@tanstack/react-router'
import ContactUsInfo from '../components/ContactUsInfo'

export const Route = createFileRoute('/contacUs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><ContactUsInfo/></div>
}
