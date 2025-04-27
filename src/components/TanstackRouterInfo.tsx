import React from 'react'

const TanstackRouterInfo = () => {
  return (
    <div>
        <h1>Descripción</h1>
    
        <div className="container_description">
            <h2>¿Qué es Tanstack Router?</h2>
            <p>TanStack Router es un enrutador para crear aplicaciones React y Solid, enfocado en la flexibilidad y la gestión eficiente de los datos. Facilita la navegación y gestión de los datos dentro de la
            aplicación, permitiendo tanto enrutamiento basado en archivos como en código. </p>
            <p>Posee una compatibilidad con TypeScript al 100% inferida. No tiene dependencias externas y ofrece funciones y características avanzadas como la carga de datos integrada, rutas anidadas, protección de rutas, navegación segura de tipos, entre otras.</p>
            
            <h2>Características:</h2>
            
            <ol type="a">
                <li><b>Navigation</b></li>
                <dd>Se refiere al proceso de moverse entre diferentes páginas o rutas dentro de una aplicación.
                    <ul>
                        <li>Programáticamente usando router.navigate()</li>
                        <li>Declarativamente utilizando el componente &lt;/Link&gt;</li>
                        <li>Mediante formularios</li>
                    </ul>
                </dd>
            
                <li><b>Protected Routes</b></li>
                <dd>Rutas que requieren condiciones especiales antes de ser accedidas.
                    <ul>
                        <li>Loaders</li>
                        <li>beforeLoad hooks</li>
                        <li>Route guards personalizados</li>
                    </ul>
                </dd>
            </ol>
    
            <div className="references">
                <b>Referencias:</b> <li><a href="https://tanstack.com/router/latest" target="_blank">https://tanstack.com/router/latest</a></li>
                <li><a href="https://www.youtube.com/watch?v=O6dS0_IvvK0&ab_channel=DevLeonardo" target="_blank">https://www.youtube.com/watch?v=O6dS0_IvvK0&ab_channel=DevLeonardo</a></li>
            </div>
        </div>


        <div>
  <div id="my-body">
    <section className="section">
      <div><h3>Instalación</h3></div>
      <span>TanStack Router es compatible con cualquiera de los administradores de NPM</span>
      <div>
      <pre className="code-block-content">
          <span className="morado">npm</span><span className="azul"> install @tanstack/react-router</span><br />
          <span className="gris"># or</span><br />
          <span className="morado">pnpm</span><span className="azul"> add @tanstack/react-router</span><br />
          <span className="gris"># or</span><br />
          <span className="morado">yarn</span><span className="azul"> add @tanstack/react-router</span><br />
          <span className="gris"># or</span><br />
          <span className="morado">bun</span><span className="azul"> add @tanstack/react-router</span><br />
          <span className="gris"># or</span><br />
          <span className="morado">deno</span><span className="azul"> add npm:@tanstack/react-router</span>
        </pre>
      </div>
    </section>

    <section className="section">
      <div><h3>Inicio Rápido</h3></div>
      <h4>Manera automática para un primer proyecto</h4>
      <span>
        Puedes iniciar rápidamente un proyecto nuevo usando el generador automático de TanStack Router.
      </span>
      <pre className="my-pre">
        <span className="morado">npx</span><span className="azul"> create-tsrouter-app@latest my-app --template file-router</span>
      </pre>

      <h4>De forma manual</h4>
      <span>
        Si prefieres mayor control o integrar TanStack Router en un proyecto existente, puedes configurarlo manualmente
        instalando los paquetes necesarios y ajustando la estructura según tu necesidad.
      </span>
      <div>
      <pre className="code-block-content">
          <span className="morado">npm</span><span className="azul"> install @tanstack/react-router @tanstack/react-router-devtools</span><br />
          <span className="morado">npm</span><span className="azul"> install</span><span className="naranja"> -D</span><span className="azul"> @tanstack/router-plugin</span><br />
          <span className="gris"># or</span><br />
          <span className="morado">pnpm</span><span className="azul"> add @tanstack/react-router @tanstack/react-router-devtools</span><br />
          <span className="morado">pnpm</span><span className="azul"> add</span><span className="naranja"> -D</span><span className="azul"> @tanstack/router-plugin</span><br />
          <span className="gris"># or</span><br />
          <span className="morado">yarn</span><span className="azul"> add @tanstack/react-router @tanstack/react-router-devtools</span><br />
          <span className="morado">yarn</span><span className="azul"> add</span><span className="naranja"> -D</span><span className="azul"> @tanstack/router-plugin</span><br />
          <span className="gris"># or</span><br />
          <span className="morado">bun</span><span className="azul"> add @tanstack/react-router @tanstack/react-router-devtools</span><br />
          <span className="morado">bun</span><span className="azul"> add</span><span className="naranja"> -D</span><span className="azul"> @tanstack/router-plugin</span><br />
          <span className="gris"># or</span><br />
          <span className="morado">deno</span><span className="azul"> add npm:@tanstack/react-router npm:@tanstack/router-plugin npm:@tanstack/react-router-devtools</span>
        </pre>
      </div>

      <div><h3>Configuración del complemento Vite</h3></div>
      <div>
      <pre className="code-block-content">
          import {'{'} defineConfig {'}'} from 'vite'<br />
          import react from '@vitejs/plugin-react'<br />
          import {'{'} TanStackRouterVite {'}'} from '@tanstack/router-plugin/vite'<br /><br />
          // https://vitejs.dev/config/<br />
          export default defineConfig({'{'}<br />
          plugins: [<br />
          // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'<br />
          TanStackRouterVite({'{'} target: 'react', autoCodeSplitting: true {'}'}),<br />
          react(),<br />
          // ...,<br />
          ],<br />
          {'}'})
        </pre>
      </div>
    </section>
  </div>
 </div>
    </div>

  )
}

export default TanstackRouterInfo