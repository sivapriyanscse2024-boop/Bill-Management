// Reusable labeled form input with optional error message.
function Input({ label, id, error, className = "", ...rest }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full rounded-md border px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
          error ? "border-red-400" : "border-slate-300 hover:border-slate-400"
        } ${className}`}
        {...rest}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

export default Input;
