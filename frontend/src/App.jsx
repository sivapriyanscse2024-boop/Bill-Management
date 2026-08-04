// Root application component.
// Wires global providers (auth/theme context) around the app's route tree.
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  return <AppRoutes />;
}

export default App;
