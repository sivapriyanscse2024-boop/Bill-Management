// Centered card layout used by unauthenticated pages (Login, Register, Forgot Password).
function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-10">
      <div className="w-full max-w-md">
        <p className="mb-6 text-center text-sm font-semibold tracking-wide text-blue-600">
          EXPENSE & BILL MANAGER
        </p>

        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 text-center">
            <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
            {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
