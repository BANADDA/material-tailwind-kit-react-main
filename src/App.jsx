import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import Dashboard from "./pages/dashbord";
import Reset from "./pages/reset";

function App() {
  return (
    <>
      <div className="container fixed left-2/4 z-10 mx-auto -translate-x-2/4 p-3">
        <Navbar routes={routes} />  
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/reset" element={<Reset />} />
      </Routes>
    </>
  );
}

export default App;
