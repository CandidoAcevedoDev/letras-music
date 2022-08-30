import { useState, createContext } from "react";
import { getSound } from "../services/api";

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
  const [alert, setAlert] = useState("");

  const busquedaLetras = async (values) => {
    const result = await getSound(values);
    console.log(result);
  };

  return (
    <LetrasContext.Provider value={{ alert, setAlert, busquedaLetras }}>
      {children}
    </LetrasContext.Provider>
  );
};

export { LetrasProvider };

export default LetrasContext;
