import { createFileRoute } from '@tanstack/react-router'
import TanstackRouterInfo from '../components/TanstackRouterInfo'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <TanstackRouterInfo/>
  )
}