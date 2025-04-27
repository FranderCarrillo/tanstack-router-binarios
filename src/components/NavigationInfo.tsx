import React from 'react'
import './navigationInfo.css'

const NavigationInfo = () => {
  return (

    <section className='Navigation-info'>
      
      <div className='Navigation-info-container'>
          <h1 className='titles-guide-navigation'>Guía de Navegación</h1>


          <div className='guide-navigation-steps'>

            <h2 className='titles-guide-navigation'>Primer paso</h2>
            <p className='text-guide-navigation'>Una vez instalado Tanstack Router,Crea la siguiente ruta de carpeta y archivos.</p>

            <div className='guide-navigation-first-step-container-paths'>
              <h3 className='text-guide-navigation'>src/routes/__root.tsx</h3>
            </div>

            <pre className="code-block-content">
              <code >
{`import { createRootRoute, createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
`}
              </code>
            </pre>

          </div>

          
          <div className='guide-navigation-steps'>
            <h2 className='titles-guide-navigation'>Segundo paso</h2>
            <p className='text-guide-navigation'>Luego de completar el primer paso, crearás las siguientes rutas de archivos.</p>

            <div className='guide-navigation-first-step-container-paths'>
              <h3 className='text-guide-navigation'>src/routes/index.tsx</h3>
            </div>

            <pre className="code-block-content">
              <code >
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
}
`}
              </code>
            </pre>

            <div className='guide-navigation-first-step-container-paths'>
              <h3 className='text-guide-navigation'>src/routes/about.tsx</h3>
            </div>

            <pre className="code-block-content">
              <code >
{`import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <div className="p-2">Hello from About!</div>
}
`}
              </code>
            </pre>
          </div>

          <div className='guide-navigation-steps'>
              <h2 className='titles-guide-navigation'>Tercer paso</h2>
              <p className='text-guide-navigation'>Finalmente, se modifica el siguiente archivo de tal manera que quede así.</p>

              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>src/main.tsx</h3>
                <h3 className='text-guide-navigation'>o en cualquer componente que se quiera renderizar, no necesariamente en el main.tsx .Pero en este primer ejemplo se hará en el main.tsx 
                </h3>
              </div>

              <pre className="code-block-content">
                <code > 
{`
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
`}
                </code>
              </pre>
          </div>


            <div className='guide-navigation-steps'>
              <h2 className='titles-guide-navigation'>Cuarto paso</h2>
              
              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>Ejectura el comando</h3>
              </div>

              <pre className="code-block-content">
              <code >
{`  npm run dev
`}
              </code>
            </pre>

              <p>Una vez ejecutado el comando se creará el archivo </p>
      
              <div className='guide-navigation-first-step-container-paths'>
                <h3 className='text-guide-navigation'>routeTree.gen.ts</h3>
              </div>
               <p>que no debes tocar, allí se generarán las rutas de la aplicación automáticamente, cada vez que crees un nuevo archivo dentro de <strong>__root.tsx</strong> y ejecutes el programa.</p>

            </div>  
          </div>

    </section>
  )
}

export default NavigationInfo