import "./App.css";
import AppNavbar from "./components/AppNavbar";
import AppRoutes from "./routes/AppRoutes";
import AppFooter from "./components/AppFooter";

import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import "react-notifications/lib/notifications.css";
Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <AppNavbar />
      <AppRoutes />
      <AppFooter />
      <NotificationContainer />
    </div>
  );
}
export default App;
