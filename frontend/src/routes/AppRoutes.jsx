import { Routes, Route } from "react-router-dom";

/* Client Components */
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

/* Admin */
import Login from "../admin/pages/auth/Login";
import Dashboard from "../admin/pages/dashboard/Dashboard";
import Hero from "../admin/pages/hero/Hero";
import AdminProjects from "../admin/pages/projects/Projects";
import AdminBlogs from "../admin/pages/blogs/Blogs";
import AdminSkills from "../admin/pages/skills/Skills";
import AdminServices from "../admin/pages/services/Services";
import ProtectedRoute from "../admin/routes/ProtectedRoute";

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
      {/* Client */}

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

      {/* Admin Login */}

      <Route path="/admin/login" element={<Login />} />

      {/* Protected Admin */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/hero"
        element={
          <ProtectedRoute>
            <Hero />
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
            <AdminBlogs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/skills"
        element={
          <ProtectedRoute>
            <AdminSkills />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/services"
        element={
          <ProtectedRoute>
            <AdminServices />
          </ProtectedRoute>
        }
      />

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
