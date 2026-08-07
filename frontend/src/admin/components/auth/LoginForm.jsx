import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import authService from "../../services/authService";

export default function LoginForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await authService.login(form);

      toast.success("Login Successful");

      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);

      toast.error("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Admin Login
      </h2>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full mb-4 p-3 rounded-lg bg-slate-800 text-white outline-none"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full mb-6 p-3 rounded-lg bg-slate-800 text-white outline-none"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg text-white font-semibold"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
