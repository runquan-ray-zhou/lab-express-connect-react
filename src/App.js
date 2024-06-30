// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            
          </Routes>
        </main>
      </Router>
    Captain's Log
    </div>
  )
}

export default App;
