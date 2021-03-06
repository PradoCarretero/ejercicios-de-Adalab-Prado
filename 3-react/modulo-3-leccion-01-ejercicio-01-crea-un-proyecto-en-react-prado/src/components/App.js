import "../styles/App.css";
import logo from "../images/logo.png";

function App() {
  return (
    <div>
      <header className="header">
        <a className="logo" href="https://adalab.es/">
          <img src={logo} title="Adalab" alt="logo adalab" />
        </a>
        <nav>
          <ul className="nav">
            <li>
              <a className="nav_item" href="https://es.wikipedia.org/wiki/Blog">
                Blog
              </a>
            </li>
            <li>
              <a
                className="nav_item"
                href="https://es.wikipedia.org/wiki/Contacto"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="box">
        <h1 className="title">Creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
