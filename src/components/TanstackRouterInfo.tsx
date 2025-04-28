import './navigationInfo.css'

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
                <li><a href="https://www.youtube.com/watch?v=KcKkwF55Pes" target="_blank">https://www.youtube.com/watch?v=KcKkwF55Pes</a></li>
            </div>
        </div>
    </div>

  )
}

export default TanstackRouterInfo