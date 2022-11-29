import logo from "./logo.svg";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import AppRoutes from "./routes/AppRoutes";

import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <AppNavbar />
      <AppRoutes />
    </div>
  );
}

export default App;
