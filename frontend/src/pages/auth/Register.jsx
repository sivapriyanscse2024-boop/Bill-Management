// Create User (Register) page — captures name, email, role, and general details.
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout.jsx";
import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";
import authService from "../../services/authService.js";
import { ROLE_OPTIONS } from "../../utils/constants.js";

const initialForm = {
  name: "",
  email: "",
  role: "",
  department: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
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
    if (!form.name.trim()) nextErrors.name = "Full name is required";
    if (!form.email) nextErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = "Enter a valid email";
    if (!form.role) nextErrors.role = "Select a role";
    if (!form.password) nextErrors.password = "Password is required";
    else if (form.password.length < 6) nextErrors.password = "Use at least 6 characters";
    if (form.confirmPassword !== form.password) nextErrors.confirmPassword = "Passwords do not match";
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
      const { confirmPassword, ...payload } = form;
      await authService.register(payload);
      navigate("/login");
    } catch (err) {
      setServerError(err?.response?.data?.message || "Could not create the account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create an account" subtitle="Add a new employee or admin user">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <Input
          id="name"
          name="name"
          type="text"
          label="Full name"
          placeholder="Jane Doe"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />

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

        <div className="flex flex-col gap-1.5">
          <label htmlFor="role" className="text-[11px] font-medium uppercase tracking-wide text-white/40">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            className={`w-full rounded-xl border bg-white/[0.06] px-4 py-2.5 text-sm text-white outline-none transition focus:bg-white/[0.09] ${
              errors.role ? "border-red-400/60" : "border-white/5 hover:border-white/10 focus:border-white/20"
            }`}
          >
            <option value="" className="bg-[#141417] text-white">
              Select a role
            </option>
            {ROLE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value} className="bg-[#141417] text-white">
                {option.label}
              </option>
            ))}
          </select>
          {errors.role && <span className="text-xs text-red-400">{errors.role}</span>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            id="department"
            name="department"
            type="text"
            label="Department"
            placeholder="Sales"
            value={form.department}
            onChange={handleChange}
          />
          <Input
            id="phone"
            name="phone"
            type="tel"
            label="Phone"
            placeholder="9876543210"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="new-password"
        />

        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="••••••••"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          autoComplete="new-password"
        />

        {serverError && <p className="text-sm text-red-400">{serverError}</p>}

        <Button type="submit" loading={loading}>
          Create account
        </Button>

        <p className="text-center text-sm text-white/40">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-white hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Register;
