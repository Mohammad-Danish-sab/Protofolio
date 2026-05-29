import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";
import ScrollProgress from "../components/ScrollProgress";

export default function MainLayout() {
  return (
    <>
      <CursorGlow />

      <ScrollProgress />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
