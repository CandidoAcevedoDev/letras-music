import AppLetras from "./pages/AppLetras";
import { LetrasProvider } from "./context/LetrasProvider";

function App() {
  return (
    <LetrasProvider>
      <AppLetras />
    </LetrasProvider>
  );
}

export default App;
