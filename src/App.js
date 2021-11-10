import "bulma/css/bulma.min.css";
import { Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/signup/Signup";
import CharSelector from "./pages/charSelector/CharSelector";

function App() {
  return (
    <div>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/charselector">
        <CharSelector />
      </Route>
    </div>
  );
}

export default App;
