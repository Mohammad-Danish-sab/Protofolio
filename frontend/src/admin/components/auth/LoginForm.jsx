import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { login } from "../../services/authService";
import { saveToken } from "../../services/token";

export default function LoginForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await login(form);

      saveToken(data.access_token);

      toast.success("Login Successful");

      navigate("/admin/dashboard");
    } catch (err) {
      toast.error("Invalid Username or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 rounded-2xl p-8 border border-slate-700"
    >
      <h1 className="text-3xl font-bold mb-8">Admin Login</h1>

      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="w-full mb-4 p-3 rounded-lg bg-slate-800"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full mb-6 p-3 rounded-lg bg-slate-800"
      />

      <button
        disabled={loading}
        className="w-full bg-cyan-500 hover:bg-cyan-600 rounded-lg py-3"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
