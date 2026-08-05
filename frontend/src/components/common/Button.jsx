// Reusable button with primary/secondary variants and a loading state.
function Button({ children, variant = "primary", loading = false, className = "", disabled, ...rest }) {
  const base =
    "w-full rounded-md px-4 py-2 text-sm font-medium transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100";
  const variants = {
    primary: "bg-blue-600 text-white shadow-sm hover:bg-blue-700",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} disabled={disabled || loading} {...rest}>
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;
