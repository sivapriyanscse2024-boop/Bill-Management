// Reusable labeled form input with optional error message.
function Input({ label, id, error, className = "", ...rest }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className={`rounded-xl border bg-white/[0.06] px-4 transition focus-within:bg-white/[0.09] ${
          error ? "border-red-400/60" : "border-white/5 hover:border-white/10 focus-within:border-white/20"
        } ${label ? "py-2" : "py-3"} ${className}`}
      >
        {label && (
          <label htmlFor={id} className="block text-[11px] font-medium uppercase tracking-wide text-white/40">
            {label}
          </label>
        )}
        <input
          id={id}
          className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
          {...rest}
        />
      </div>
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}

export default Input;
