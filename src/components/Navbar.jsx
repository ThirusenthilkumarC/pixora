import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaPaperPlane,
} from "react-icons/fa";

const navItems = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/explore", label: "Explore", icon: FaCompass },
  { to: "/messages", label: "Messages", icon: FaPaperPlane },
  { to: "/notifications", label: "Notifications", icon: FaBell },
  { to: "/profile", label: "Profile", icon: FaUserCircle },
];

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSearch = (q) => {
    setQuery(q);
    window.dispatchEvent(new CustomEvent("pixora:search", { detail: q }));
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-[0_10px_35px_rgba(15,23,42,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-3 sm:px-5 lg:px-6 xl:px-8">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-3 rounded-2xl px-2 py-1.5 text-left transition hover:bg-slate-100"
          aria-label="Go to home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/25">
            P
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">Pixora</p>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">Pixora</h1>
          </div>
        </button>

        <div className="hidden min-w-0 flex-1 justify-center md:flex">
          <label className="flex w-full max-w-[440px] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 shadow-sm transition focus-within:border-blue-300 focus-within:bg-white focus-within:shadow-md">
            <FaSearch className="h-4 w-4 text-slate-400" />
            <input
              aria-label="Search Pixora"
              value={query}
              onChange={(e) => onSearch(e.target.value)}
              type="text"
              placeholder="Search Pixora"
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              aria-label={label}
              className={({ isActive }) =>
                `flex h-11 w-11 items-center justify-center rounded-2xl border transition md:h-11 md:w-11 ${
                  isActive
                    ? "border-indigo-200 bg-indigo-50 text-indigo-700 shadow-sm"
                    : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              <Icon className="h-4 w-4 md:h-5 md:w-5" />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;