import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Appointment from "./Pages/Appointment/Appointment";
import Navbar from "./Pages/Home/Shared/Navbar";
import RequireAuth from "./Pages/Login/RequireAuth";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { publicRoute } from "./publicRoute/publicRoute";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
        {PrivateRoute.map(({ path, Component }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <RequireAuth>
                <Component />
              </RequireAuth>
            }
          ></Route>
        ))}
        {/* <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route> */}
      </Routes>
    </div>
  );
}

export default App;
