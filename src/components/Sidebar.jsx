import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaEnvelope,
  FaBell,
  FaBookmark,
  FaCog,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";

const menuItems = [
  { name: "Home", icon: FaHome, to: "/" },
  { name: "Explore", icon: FaCompass, to: "/explore" },
  { name: "Messages", icon: FaEnvelope, to: "/messages" },
  { name: "Notifications", icon: FaBell, to: "/notifications" },
  { name: "Saved", icon: FaBookmark, to: "/saved" },
  { name: "Settings", icon: FaCog, to: "/settings" },
];

function Sidebar() {
  return (
    <div className="space-y-5">
      <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 text-2xl font-bold text-white shadow-lg shadow-indigo-500/20">
            A
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold text-slate-900">Ava Morgan</h2>
            <p className="truncate text-sm text-slate-500">@ava.pixora</p>
          </div>
        </div>
        <NavLink
          to="/profile"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          View profile
          <FaChevronRight className="h-3 w-3" />
        </NavLink>
      </div>

      <div className="rounded-[26px] border border-slate-200 bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
        <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Navigation</p>
        <div className="mt-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className="rounded-[26px] border border-slate-200 bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">Your Plan</p>
            <p className="text-sm text-slate-500">Starter</p>
          </div>
          <span className="inline-flex rounded-full bg-indigo-100 px-2.5 py-1 text-[11px] font-semibold text-indigo-700">Free</span>
        </div>
        <div className="mt-4 rounded-[20px] bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 p-4 text-white shadow-lg shadow-indigo-500/20">
          <p className="text-sm font-semibold">Upgrade for more stories</p>
          <p className="mt-2 text-sm text-indigo-50/90">Get premium analytics and trending topics.</p>
        </div>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-[22px] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        <FaSignOutAlt className="h-4 w-4" />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
