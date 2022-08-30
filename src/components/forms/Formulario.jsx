import { useState } from "react";
import useLetras from "../../hooks/useLetras";

const Formulario = () => {
  const [search, setSearch] = useState({
    artista: "",
    cancion: "",
  });

  const { setAlert, busquedaLetras } = useLetras();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Coloca nombre de artista y canción");
      return;
    }

    setAlert("");

    busquedaLetras(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Busca por Artista y Canción</legend>

      <div className="form-grid">
        <div>
          <label htmlFor="artista">Artista</label>
          <input
            type="text"
            name="artista"
            id="artista"
            value={search.artista}
            onChange={(e) =>
              setSearch({
                ...search,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="Coloca el nombre del artista"
          />
        </div>
        <div>
          <label htmlFor="cancion">Canción</label>
          <input
            type="text"
            name="cancion"
            id="cancion"
            value={search.cancion}
            onChange={(e) =>
              setSearch({
                ...search,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="Coloca el nombre de la Canción"
          />
        </div>

        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
