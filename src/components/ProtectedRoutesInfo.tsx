import React from 'react'
import './navigationInfo.css'
const ProtectedRoutesInfo = () => {
  return (
    <div>
      
      <section className='Navigation-info'>

        <div className='Navigation-info-container'>

          <h1 className='titles-guide-navigation'>Guía de Protected Routes</h1>

          <p className='text-guide-navigation'>Ejemplo básico de la utilización de Protected Routes</p>

          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Primer paso</h2>

            <p className='text-guide-navigation'>Crea la siguiente ruta de archivos y coloca lo siguiente</p>

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

            <p className='text-guide-navigation'>Crea la siguiente ruta de archivos y coloca lo siguiente</p>

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

            <p className='text-guide-navigation'>Crea la siguiente ruta de archivos y coloca lo siguiente</p>

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

            <h2 className='titles-guide-navigation'>Quinto paso</h2>

            <p className='text-guide-navigation'>Agrega lo siguiente en la ruta de archivos</p>

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

            <h2 className='titles-guide-navigation'>Sexto paso</h2>

            <p className='text-guide-navigation'>Crea la siguiente ruta de archivos y coloca lo siguiente</p>

              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>src/routes/profile.tsx</h3>
              </div>

              <pre className="code-block-content">
                <code>
{`import { createFileRoute } from '@tanstack/react-router';
            
export const Route = createFileRoute('/profile')({
  component: RouteComponent,
});
            
function RouteComponent() {
  return &lt;div&gt;Hello "/profile"!&lt;/div&gt;;
}`}
               </code>
            </pre>

          </div> 
          {/* final */}

          {/* inicio */}
          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Séptimo paso</h2>

            <p className='text-guide-navigation'>Crea la siguiente ruta de archivos y coloca lo siguiente</p>

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

            <h2 className='titles-guide-navigation'>Octavo paso</h2>

            <p className='text-guide-navigation'>Crea la siguiente ruta de archivos y coloca lo siguiente</p>

              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>src/routes/profile.tsx</h3>
              </div>

              <pre className="code-block-content">
                <code>
{`import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile"!</div>
}
`}
               </code>
            </pre>

          </div> 
          {/* final */}


          {/* inicio */}
          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Nota</h2>

            <p className='text-guide-navigation'>El flujo de este ejemplo se basa en crear realizar un autenticación de un Usuario para poder accerder a la información de alguna Ruta en específico. En este ejemplo un Usuario no debe de poder acceder a la ruta Profile, sin antes haber hecho login.</p>


          </div> 
          {/* final */}

        </div>

      </section>


    </div>
    
  )
}

export default ProtectedRoutesInfo