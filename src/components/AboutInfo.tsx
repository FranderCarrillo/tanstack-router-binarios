import React from 'react';
import './about.css'; 

const AboutInfo = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más acerca de AutoVentas</p>
      </header>

      <section className="about-content">
        <h2>Nuestra Historia</h2>
        <p>
          AutoVentas nació en 2025 con la misión de ofrecer los mejores vehículos al mejor precio. 
          Desde entonces, hemos ayudado a miles de clientes a encontrar el carro de sus sueños, 
          brindando siempre calidad, confianza y atención personalizada.
        </p>

        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>✔️ Amplia selección de marcas y modelos.</li>
          <li>✔️ Financiamiento accesible y personalizado.</li>
          <li>✔️ Garantía de calidad en todos nuestros vehículos.</li>
          <li>✔️ Servicio al cliente excepcional.</li>
        </ul>
      </section>

      <footer className="about-footer">
        <p>¡Tu confianza es nuestro motor!</p>
      </footer>
    </div>
  );
};

export default AboutInfo