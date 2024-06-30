// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
// import Edit from "./Pages/Edit";
// import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
// import New from "./Pages/New";
// import Show from "./Pages/Show";

// Components
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            {/* <Route path="/logs/new" element={<New />} /> */}
            <Route path="/logs/:id" element={<Show />} />
             {/*<Route path="/logs/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;
