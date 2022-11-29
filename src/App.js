import logo from "./logo.svg";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <AppNavbar />
      <AppRoutes />
      {/* <ReactTooltip />
    <AppRoutes />
    <NotificationContainer /> */}
    </div>
  );
}

export default App;
