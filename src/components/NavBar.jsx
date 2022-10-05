import imagen from "../multimedia/vaypool.png";
import CartWidget from "./CartWidget";
import "../index.css";
function NavBar() {
  return (
    <>
      <div className="titulo">
        <h1>Vaypool</h1>
        <img src={imagen} />
      </div>
      <nav>
        <ul class="nav__links">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Hombres</a>
          </li>
          <li>
            <a href="#">Mujeres</a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <div className = "carrito-de-compras">
            <a href="#">
              <CartWidget />
            </a>
          </div>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
