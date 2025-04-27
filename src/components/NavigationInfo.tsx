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
{`import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
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
              <h3 className='text-guide-navigation'>src/routes/index.tsx</h3>
            </div>

            <pre className="code-block-content">
              <code >
{`import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return <div className="p-2">Hello from About!</div>
}
`}
              </code>
            </pre>

            
          </div>


      </div>
|
    </section>
  )
}

export default NavigationInfo