import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-[#020617] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}
