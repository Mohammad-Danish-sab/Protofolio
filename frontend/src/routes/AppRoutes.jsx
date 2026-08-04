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

/* Admin Authentication */
import Login from "../admin/pages/auth/Login";

/* Admin Pages */
import Dashboard from "../admin/pages/dashboard/Dashboard";
import Hero from "../admin/pages/hero/Hero";
import AdminAbout from "../admin/pages/about/About";
import AdminProjects from "../admin/pages/projects/Projects";
import AdminBlogs from "../admin/pages/blogs/Blogs";
import AdminSkills from "../admin/pages/skills/Skills";
import AdminServices from "../admin/pages/services/Services";
import AdminExperience from "../admin/pages/experience/Experience";
import AdminEducation from "../admin/pages/education/Education";
import AdminTestimonials from "../admin/pages/testimonials/Testimonials";
import ContactMessages from "../admin/pages/contact/ContactMessages";

/* Protected Route */
import ProtectedRoute from "../admin/routes/ProtectedRoute";

/* Client Layout */
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
      {/* ================= CLIENT ROUTES ================= */}

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

      {/* ================= ADMIN LOGIN ================= */}

      <Route path="/admin/login" element={<Login />} />

      {/* ================= PROTECTED ADMIN ROUTES ================= */}

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
        path="/admin/about"
        element={
          <ProtectedRoute>
            <AdminAbout />
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

      <Route
        path="/admin/experience"
        element={
          <ProtectedRoute>
            <AdminExperience />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/education"
        element={
          <ProtectedRoute>
            <AdminEducation />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/testimonials"
        element={
          <ProtectedRoute>
            <AdminTestimonials />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/contact"
        element={
          <ProtectedRoute>
            <ContactMessages />
          </ProtectedRoute>
        }
      />

      {/* ================= 404 ================= */}

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
