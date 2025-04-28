import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./hooks/useAuth";
import ProfileProvider from "./Context/ProfileProvider";


const router = createRouter({ routeTree,context: { authentication: undefined! },});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const authentication = useAuth("Login");
  return (
    <ProfileProvider >
      <RouterProvider router={router} context={{ authentication }} />
    </ProfileProvider>
  )
}

export default App;
