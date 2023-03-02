import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Home directory</h1>
      <button>
        <Link to={"/login"}>Go to Login</Link>
      </button>
    </div>
  );
}

export default App;
