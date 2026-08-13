import { useState } from "react";

const sections = {
  Account: ["Email address", "Phone number", "Username"],
  Privacy: ["Private account", "Activity status", "Location sharing"],
  Notifications: ["Push alerts", "Email digests", "Mentions"],
  Appearance: ["Dark mode", "Compact cards", "Reduced motion"],
  Security: ["Two-factor auth", "Login alerts", "Active sessions"],
};

function ToggleRow({ label }) {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center justify-between gap-3 rounded-[18px] border border-slate-200 bg-slate-50 px-3 py-3">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <button
        type="button"
        aria-label={label}
        onClick={() => setEnabled((value) => !value)}
        className={`relative h-7 w-12 rounded-full transition ${enabled ? "bg-indigo-600" : "bg-slate-300"}`}
      >
        <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${enabled ? "left-6" : "left-1"}`} />
      </button>
    </div>
  );
}

function Settings() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-5">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Preferences</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Settings</h2>
      </div>

      <div className="mt-5 space-y-5">
        {Object.entries(sections).map(([title, items]) => (
          <div key={title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <div className="mt-4 space-y-3">
              {items.map((item) => (
                <ToggleRow key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;
