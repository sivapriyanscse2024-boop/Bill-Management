// Reusable button with primary/secondary variants and a loading state.
function Button({ children, variant = "primary", loading = false, className = "", disabled, ...rest }) {
  const base =
    "flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100";
  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} disabled={disabled || loading} {...rest}>
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;
