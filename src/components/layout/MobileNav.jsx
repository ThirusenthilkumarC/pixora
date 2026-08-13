import { NavLink } from "react-router-dom";
import { FaHome, FaCompass, FaPlus, FaEnvelope, FaUser } from "react-icons/fa";

const items = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/explore", label: "Explore", icon: FaCompass },
  { to: "/messages", label: "Create", icon: FaPlus, special: true },
  { to: "/messages", label: "Messages", icon: FaEnvelope },
  { to: "/profile", label: "Profile", icon: FaUser },
];

function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/90 px-3 py-2 shadow-[0_-18px_35px_rgba(15,23,42,0.07)] backdrop-blur-xl xl:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5 items-center gap-2">
        {items.map(({ to, label, icon: Icon, special }) => (
          <NavLink
            key={label}
            to={to}
            aria-label={label}
            className={({ isActive }) =>
              `flex items-center justify-center rounded-2xl p-2 transition ${
                special
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25"
                  : isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            <Icon className="h-5 w-5" />
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default MobileNav;
