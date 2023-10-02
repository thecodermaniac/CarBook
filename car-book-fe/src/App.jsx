import Layouts from "./components/Layouts"
import PrivateRoute from "./components/PrivateRoute";
import SingleCar from "./components/SingleCar";
import About from "./pages/About";
import ExploreCar from "./pages/ExploreCar";
import Home from "./pages/Home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Layouts>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore-car" element={<ExploreCar />} />
          <Route path="/explore-car/:carId" element={<SingleCar />} />
          <Route path="/aboutus" element={<PrivateRoute><About /></PrivateRoute>} />
        </Routes>
      </Layouts>
    </BrowserRouter>
  )
}

export default App
