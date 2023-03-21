import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryB from "./components/categoryB/CategoryB";
import CategoryC from "./components/categoryC/CategoryC";
import CategoryS from "./components/categoryS/CategoryS";
import DragRace from "./components/dragRace/DragRace";
import DriftCar from "./components/driftCar/DriftCar";
import HeaderNav from "./components/headerNav/HeaderNav";
import RaceCategory from "./components/raceCategory/RaceCategory";
import RacersPresentation from "./components/racersPresentation/RacersPresentation";
import RaceRules from "./components/raceRules/RaceRules";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <img
          src="./fagousa"
          alt="fagousaaa"
          style={{ width: "1800px", height: "auto" }}
        />
        <Routes>
          {/* <Route path="/" element={<RacersPresentation />} /> */}
          {/* <Route path="/Category" element={<RaceCategory />} /> */}
          {/* <Route path="/Category/C" element={<CategoryC />} /> */}
          {/* <Route path="/Category/B" element={<CategoryB />} /> */}
          {/* <Route path="/Category/S" element={<CategoryS />} /> */}
          {/* <Route path="/Category/Drift" element={<DriftCar />} /> */}
          {/* <Route path="/Category/Drag" element={<DragRace />} /> */}
          {/* <Route path="/RaceRules" element={<RaceRules />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
