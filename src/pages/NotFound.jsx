import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">404</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-sm text-slate-600">The page you requested could not be found.</p>
      <Link to="/" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25">
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;