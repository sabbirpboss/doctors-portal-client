import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Home/Shared/Navbar";
import { publicRoute } from "./publicRoute/publicRoute";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
