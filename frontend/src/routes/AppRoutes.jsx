import { Routes, Route } from "react-router-dom";

/* Client Layout */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* Client Pages */
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

/* Admin Pages */
import Dashboard from "../admin/pages/dashboard/Dashboard";
import AdminProjects from "../admin/pages/projects/Projects";
import Blogs from "../admin/pages/blogs/Blogs";
import ProtectedRoute from "../admin/routes/ProtectedRoute";
import Login from "../admin/pages/auth/Login";

/* Layout for Client */
function ClientLayout({ children }) {
  return (
    <div className="bg-[#020617] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Client Routes */}

      <Route
        path="/"
        element={
          <ClientLayout>
            <Home />
          </ClientLayout>
        }
      />

      <Route
        path="/about"
        element={
          <ClientLayout>
            <About />
          </ClientLayout>
        }
      />

      <Route
        path="/projects"
        element={
          <ClientLayout>
            <Projects />
          </ClientLayout>
        }
      />

      <Route
        path="/skills"
        element={
          <ClientLayout>
            <Skills />
          </ClientLayout>
        }
      />

      <Route
        path="/services"
        element={
          <ClientLayout>
            <Services />
          </ClientLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <ClientLayout>
            <Contact />
          </ClientLayout>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/projects"
        element={
          <ProtectedRoute>
            <AdminProjects />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/blogs"
        element={
          <ProtectedRoute>
            <Blogs />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}

      <Route path="/admin/dashboard" element={<Dashboard />} />

      <Route path="/admin/projects" element={<AdminProjects />} />

      <Route path="/admin/blogs" element={<Blogs />} />

      {/* 404 */}

      <Route
        path="*"
        element={
          <ClientLayout>
            <NotFound />
          </ClientLayout>
        }
      />
    </Routes>
  );
}
