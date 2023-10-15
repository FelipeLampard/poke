import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Pokemons = () => {
  const [items, setItems] = useState([]);
  const [itemsSelected, setItemsSelected] = useState("");
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/pokemon";

  const getItems = async () => {
    const rest = await fetch(url);
    const { results } = await rest.json();
    setItems(results);
  };

  const goToSelected = async () => {
    itemsSelected
      ? navigate(`/pokemons/${itemsSelected}`)
      : alert("Debes seleccionar tu pokemon");
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="mt-5 text-center">
        <h1>Elige tu Pokemon</h1>
        <div className="col-5 col-sm-3 col-lg-2 mx-auto">
          <select
            className="form-select text-center"
            value={itemsSelected}
            onChange={({ target }) => setItemsSelected(target.value)}
          >
            <option value="" disabled>
              Pokemons
            </option>
            {items.map(({ name }, i) => (
              <option key={i} value={name}>
                {name}
              </option>
            ))}
          </select>
          <Button
            onClick={goToSelected}
            variant="dark"
            className="mt-3"
          >
            Detalles
          </Button>
        </div>
      </div>
    </>
  );
};

export default Pokemons;
