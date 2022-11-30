import logo from "./logo.svg";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import AppRoutes from "./routes/AppRoutes";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div>
      <AppNavbar />
      <AppRoutes />
      <AppFooter />
    </div>
  );
}
export default App;
