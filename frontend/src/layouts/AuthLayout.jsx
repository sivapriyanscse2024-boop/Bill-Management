// Centered card layout used by unauthenticated pages (Login, Register, Forgot Password).
function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10">
      <div className="pointer-events-none absolute -top-40 right-[-15%] h-[700px] w-[420px] rotate-[25deg] bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-3xl" />

      <div
        className="relative w-full max-w-sm rounded-3xl border border-white/5 bg-[#141417] p-8"
        style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 20px 60px -15px rgba(0,0,0,0.8)" }}
      >
        <div className="mb-6 flex flex-col items-center text-center">
          <svg className="mb-4 h-8 w-8 text-white/60" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeDasharray="2.5 5" strokeLinecap="round" />
          </svg>
          <h1 className="text-lg font-bold text-white">{title}</h1>
          {subtitle && <p className="mt-1 text-xs text-white/40">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
