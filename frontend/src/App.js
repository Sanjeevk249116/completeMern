import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Home/>
     <Login/>
     <Signup/>
    </div>
  );
}

export default App;
