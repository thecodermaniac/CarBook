import Layouts from "./components/Layouts"
import PrivateRoute from "./components/PrivateRoute";
import SingleCar from "./components/SingleCar";
import About from "./pages/About";
import ExploreCar from "./pages/ExploreCar";
import Home from "./pages/Home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserState } from "./contex/UserContext";
import BookedCars from "./pages/BookedCars";
function App() {
  return (
    <UserState>
      <BrowserRouter>
        <Layouts>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore-car" element={<ExploreCar />} />
            <Route path="/explore-car/:carId" element={<SingleCar />} />
            <Route path="/user-booking" element={<BookedCars />} />
            <Route path="/aboutus" element={<PrivateRoute><About /></PrivateRoute>} />
          </Routes>
        </Layouts>
      </BrowserRouter>
    </UserState>
  )
}

export default App
