import { Routes, Route, useNavigate } from "react-router";
import { Home } from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from 'react-toastify'
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { SupremeCourt } from "./pages/SupremeCourt";
import { DistrictCourt } from "./pages/DistrictCourt";
import { HighCourt } from "./pages/HighCourt";
import { UpdateNewCase } from "./pages/UpdateNewCase";
import { TrackCase } from "./pages/TrackCase";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/supremecourt" element={<SupremeCourt/>} />
        <Route exact path="/districtcourt" element={<DistrictCourt/>} />
        <Route exact path="/highcourt" element={<HighCourt/>} />
        <Route exact path="/supremecourt/updatecase" element={<UpdateNewCase/>} />
        <Route exact path="/districtcourt/updatecase" element={<UpdateNewCase/>} />
        <Route exact path="/highcourt/updatecase" element={<UpdateNewCase/>} />
        <Route exact path="/trackcase" element={<TrackCase/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="mt-14 font-bold  "
      />
    </>
  );
}

export default App;
