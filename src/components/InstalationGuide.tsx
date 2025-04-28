import './navigationInfo.css'

const InstalationGuide = () => {
  return (
  <section className="Navigation-info">

    <div className="Navigation-info-container">
    
      <h1 className='titles-guide-navigation'>Guía de Instalación</h1>
        
      <div className='guide-navigation-steps'>
      <span className='text-guide-navigation'>TanStack Router es compatible con cualquiera de los administradores de NPM</span>
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
    

    <section className="guide-navigation-steps">
      <div><h2 className='titles-guide-navigation'>Inicio Rápido</h2></div>
      <p className='text-guide-navigation'>Manera automática para un primer proyecto</p>
      <span className='text-guide-navigation'>
        Puedes iniciar rápidamente un proyecto nuevo usando el generador automático de TanStack Router.
      </span>
      <pre className="code-block-content">
        <span className="morado">npx</span><span className="azul"> create-tsrouter-app@latest my-app --template file-router</span>
      </pre>

      <h2 className='titles-guide-navigation'>De forma manual</h2>
      <span className='text-guide-navigation'>
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

      <div><h2 className='titles-guide-navigation'>Configuración del complemento Vite</h2></div>
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
  </section>
  )
}

export default InstalationGuide;