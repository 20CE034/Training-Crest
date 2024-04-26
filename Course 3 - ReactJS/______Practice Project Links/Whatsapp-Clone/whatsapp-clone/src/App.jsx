import { ContactProvider } from "./contexts/ContactsProvider.js";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <ContactProvider>
        <Dashboard id={id} />
      </ContactProvider>
    </>
  );
}

export default App;
