import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import AddVehicle from "./pages/add-vehicle";
import EditVehicle from "./pages/edit-vehicle";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddVehicle />} />
          <Route path="/edit/:id" element={<EditVehicle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
