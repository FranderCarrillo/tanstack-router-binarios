

const ContactUsInfo = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte a encontrar tu próximo carro</p>
      </header>

      <section className="contact-content">
        <h2>Información de Contacto</h2>
        <p>📍 Dirección: Nicoya, Costa Rica</p>
        <p>📞 Teléfono: +506 1234-5678</p>
        <p>📧 Email: info@autoventas.com</p>

        <h2>Escríbenos</h2>
        <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo electrónico" required />
          <textarea placeholder="Tu mensaje" rows={5} required />
          <button type="submit">Enviar Mensaje</button>
        </form>
      </section>

      <footer className="contact-footer">
        <p>Te responderemos lo antes posible 🚗</p>
      </footer>
    </div>
  );
};

export default ContactUsInfo;
