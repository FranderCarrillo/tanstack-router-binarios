

const ProtectedRoutesInfo = () => {
  return (
    <div>
      
      <section className='Navigation-info'>

        <div className='Navigation-info-container'>

          <h1 className='titles-guide-navigation'>Guía de Protected Routes</h1>

          <p className='text-guide-navigation'>Ejemplo básico de la utilización de Protected Routes</p>

          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Primer paso</h2>

            <p className='text-guide-navigation'>Crea la siguiente ruta de archivos y coloca lo siguiente, esto para crear una hook de autenticación, donde se permite iniciar, cerrar y verificar la sesión.</p>

              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>src/hooks/useAuth.tsx</h3>
              </div>

              <pre className="code-block-content">
                <code>
{`export const useAuth = () => {
  const signIn = () => {
    localStorage.setItem("isAuthenticated", "true");
  };

  const signOut = () => {
    localStorage.removeItem("isAuthenticated");
  };

  const isLogged = () => localStorage.getItem("isAuthenticated") === "true";

  return { signIn, signOut, isLogged };
};

export type AuthContext = ReturnType<typeof useAuth>;
`}
               </code>
            </pre>

          </div>

        {/* inicio */}
          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Segundo paso</h2>

            <p className='text-guide-navigation'>Crea la siguiente ruta de archivos y coloca lo siguiente, funciones que retornan si el usuarió está autenticado, no lo está o cerró cesión. </p>

              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>src/utils/Auth.ts</h3>
              </div>

              <pre className="code-block-content">
                <code>
{`export function isAuthenticated() {
    return localStorage.getItem("isAuthenticated") === "true";
  }
  
  export async function signIn() {
    localStorage.setItem("isAuthenticated", "true");
  }
  
  export async function signOut() {
    localStorage.removeItem("isAuthenticated");
  }`}
               </code>
            </pre>

          </div> 
          {/* final */}


          {/* inicio */}
          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Tercer paso</h2>

            <p className='text-guide-navigation'>
              Crea el siguiente archivo para definir la ruta principal de la aplicación, donde se mostrará una página de bienvenida básica.
            </p>


              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>src/routes/index.tsx</h3>
              </div>

              <pre className="code-block-content">
                <code>
{`import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}`}
               </code>
            </pre>

          </div> 
          {/* final */}



          {/* inicio */}
          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Cuarto paso</h2>

            <p className='text-guide-navigation'>
              Agrega el siguiente contenido en el archivo especificado. Aquí configuraremos el `root route` y la navegación principal entre las páginas: Home, Login y Profile.
            </p>


              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>src/routes/__root.tsx</h3>
              </div>

              <pre className="code-block-content">
                <code>
{`import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AuthContext } from '../hooks/useAuth';

type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/login" className="[&.active]:font-bold">
          Login
        </Link>{' '}
        <Link to="/profile" className="[&.active]:font-bold">
          Profile
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),

})`}
               </code>
            </pre>

          </div> 
          {/* final */}


          {/* inicio */}
          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Quinto paso</h2>

            <p className='text-guide-navigation'>
              Crea el archivo para la ruta de Profile. Aquí protegeremos la ruta verificando que el usuario esté autenticado antes de permitir el acceso.
            </p>


              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>src/routes/profile.tsx</h3>
              </div>

              <pre className="code-block-content">
                <code>
{`import { createFileRoute, redirect } from '@tanstack/react-router'
import { useGetUser } from '../services/User/userHook'
import UserCard from '../card/user/UserCard';

export const Route = createFileRoute('/profile')({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: Profile,
})

function Profile() {
  const {user} = useGetUser(1);
  return (
    <div>
      <UserCard user={user} />
    </div>
  );
}`}
               </code>
            </pre>

          </div> 
          {/* final */}

          {/* inicio */}
          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Sexto paso</h2>

            <p className='text-guide-navigation'>
              Crea el archivo para la ruta de Login. Aquí gestionaremos el inicio y cierre de sesión del usuario utilizando botones.
            </p>


              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>src/routes/login.tsx</h3>
              </div>

              <pre className="code-block-content">
                <code>
{`import { createFileRoute, useRouter } from '@tanstack/react-router'
import { isAuthenticated, signIn, signOut } from '../utils/auth';

export const Route = createFileRoute('/login')({
  component: Login,
})
function Login() {
    const router = useRouter();
    return (
      <>
        <h2>Login</h2>
        {isAuthenticated() ? (
          <>
            <p>Hello user!</p>
            <button
              onClick={async () => {
                signOut();
                router.invalidate();
              }}
            >
              Sign out
            </button>
          </>
        ) : (
          <button
            onClick={async () => {
              signIn();
              router.invalidate();
            }}
          >
            Sign in
          </button>
        )}
      </>
    );
}`}
               </code>
            </pre>

          </div> 
          {/* final */}

          {/* inicio */}
          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Séptimo paso</h2>

            <p className='text-guide-navigation'>
              Modifica el archivo App.tsx para integrar el router y pasar el contexto de autenticación a toda la aplicación.
            </p>


              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>src/app.tsx</h3>
              </div>

              <pre className="code-block-content">
                <code>
{`import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./hooks/useAuth";

const router = createRouter({ routeTree,context: { authentication: undefined! },});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const authentication = useAuth();
  return <RouterProvider router={router} context={{ authentication }} />;
}

export default App;
`}
               </code>
            </pre>

          </div> 
          {/* final */}



          {/* inicio */}
          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Nota</h2>

            <p className='text-guide-navigation'>
              El flujo de este ejemplo se basa en proteger rutas mediante autenticación. Un usuario no podrá acceder a la página de Profile si no ha iniciado sesión previamente.
            </p>
            
          </div> 
          {/* final */}

        </div>

      </section>


    </div>
    
  )
}

export default ProtectedRoutesInfo