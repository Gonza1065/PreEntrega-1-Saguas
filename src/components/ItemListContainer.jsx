import zapatillas from "../multimedia/zapatillas.jpg";
import camperaAdidas from "../multimedia/camperaAdidas.webp";
import camisetaPuma from "../multimedia/camisetaPuma.jpg";
import gorraNike from "../multimedia/gorraNike.webp";
import Button from "./Button.jsx";
import "../index.css";
function ItemListContainer(props) {
  return (
    <div className="productos">
      <div>
        <h2>Zapatillas Nike Air Force</h2>
        <img src={zapatillas} />
        <hr></hr>
        <div className="precio">
          <h5>Precio: $</h5>
        </div>
        <div className="boton">
          <Button />
        </div>
      </div>
      <div>
        <h2>Campera Adidas</h2>
        <img src={camperaAdidas} />
        <hr></hr>
        <div className="precio">
          <h5>Precio: $</h5>
        </div>
        <div className="boton">
          <Button />
        </div>
      </div>
      <div>
        <h2>Camiseta Puma</h2>
        <img src={camisetaPuma} />
        <hr></hr>
        <div className="precio">
          <h5>Precio: $</h5>
        </div>
        <div className="boton">
          <Button />
        </div>
      </div>
      <div>
        <h2>Gorra Nike</h2>
        <img src={gorraNike} />
        <hr></hr>
        <div className="precio">
          <h5>Precio: $</h5>
        </div>
        <div className="boton">
          <Button />
        </div>
      </div>
    </div>
  );
}
export default ItemListContainer;
