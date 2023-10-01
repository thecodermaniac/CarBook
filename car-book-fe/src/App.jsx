import Layouts from "./components/Layouts"
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Layouts>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<PrivateRoute><About /></PrivateRoute>} />
        </Routes>
      </Layouts>
    </BrowserRouter>
  )
}

export default App
