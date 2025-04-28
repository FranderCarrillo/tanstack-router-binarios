import './home.css'
const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a AutoVentas</h1>
        <p>Tu próximo carro te espera aquí</p>
      </header>

      <section className="featured-cars">
        <h2>Carros Destacados</h2>
        <div className="cars-grid">
          <div className="car-card">
            <img src="https://fuelcarmagazine.com/wp-content/uploads/2024/05/Honda-Civic-2025-hibrido.jpg" alt="Carro 1" />
            <h3>Honda Civic 2023</h3>
            <p>$25,000</p>
          </div>

          <div className="car-card">
            <img src="https://www.autonocion.com/wp-content/uploads/2021/11/Mustang-Shelby-GT500-Heritage-Edition-2022-11.jpg" alt="Carro 2" />
            <h3>Ford Mustang Shelby 2022</h3>
            <p>$40,000</p>
          </div>

          <div className="car-card">
            <img src="https://i.pinimg.com/736x/84/b9/e0/84b9e0d7fee21d277ece8fbfd3c5e165.jpg" alt="Carro 3" />
            <h3>Chevrolet Camaro 2022</h3>
            <p>$38,500</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2025 AutoVentas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
