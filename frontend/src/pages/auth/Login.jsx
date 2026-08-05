// Login page — employee/admin authentication entry point.
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout.jsx";
import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";
import authService from "../../services/authService.js";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.email) nextErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = "Enter a valid email";
    if (!form.password) nextErrors.password = "Password is required";
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setServerError("");
    setLoading(true);
    try {
      await authService.login({ ...form, rememberMe });
      navigate("/");
    } catch (err) {
      setServerError(err?.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to manage your expense bills">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@company.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 accent-blue-600"
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="font-medium text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        {serverError && <p className="text-sm text-red-500">{serverError}</p>}

        <Button type="submit" loading={loading}>
          Log in
        </Button>

        <p className="text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="font-medium text-blue-600 hover:underline">
            Create one
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Login;
