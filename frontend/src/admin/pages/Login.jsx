import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await login(formData.email, formData.password);

      toast.success("Login Successful");

      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.detail || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Glow */}

      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[180px] rounded-full -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-teal-500/20 blur-[180px] rounded-full bottom-0 right-0"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
          <h1 className="text-4xl font-black text-white text-center">
            Admin Login
          </h1>

          <p className="text-zinc-400 text-center mt-3">
            Portfolio Management System
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mt-10">
            {/* Email */}

            <div className="relative">
              <Mail className="absolute left-4 top-4 text-zinc-500" size={20} />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-500"
              />
            </div>

            {/* Password */}

            <div className="relative">
              <Lock className="absolute left-4 top-4 text-zinc-500" size={20} />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white outline-none focus:border-cyan-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-zinc-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 font-bold hover:scale-[1.02] transition-all"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
