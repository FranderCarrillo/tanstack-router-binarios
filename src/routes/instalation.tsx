import { createFileRoute } from '@tanstack/react-router'
import InstalationGuide from '../components/InstalationGuide';

export const Route = createFileRoute('/instalation')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    <InstalationGuide/>
  </div>
  );
}
