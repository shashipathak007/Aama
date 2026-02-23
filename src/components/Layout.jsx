import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home, Activity, Heart, Baby, Smile, Users,
  BookOpen, UserCheck, Package, Menu, X
} from "lucide-react";

const navItems = [
  { path: "/today",     label: "Today",     icon: Home },
  { path: "/tracker",   label: "Tracker",   icon: Activity },
  { path: "/health",    label: "Health",    icon: Heart },
  { path: "/baby",      label: "My Baby",   icon: Baby },
  { path: "/support",   label: "Support",   icon: Smile },
  { path: "/community", label: "Community", icon: Users },
  { path: "/learn",     label: "Learn",     icon: BookOpen },
  { path: "/partner",   label: "Partner",   icon: UserCheck },
  { path: "/resources", label: "Resources", icon: Package },
];

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #fff0f6 0%, #fce7f3 50%, #f5f3ff 100%)" }}>
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-md border-b border-pink-100 sticky top-0 z-40">
        <div className="flex items-center px-4 h-14">
          <button className="md:hidden mr-3 text-pink-500" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Clickable Logo */}
         <NavLink to="/today" className="flex items-center gap-2">
  <img src="/src/assets/logo.svg" className="w-8 h-8 rounded-full object-cover" />
  <div>
    <span className="font-bold text-gray-800 text-lg" style={{ fontFamily: "'Georgia', serif" }}>Aama</span>
    <p className="text-xs text-pink-400 leading-none">Your pregnancy companion</p>
  </div>
           </NavLink>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed md:sticky top-14 left-0 z-30 h-[calc(100vh-3.5rem)] w-56 bg-white/80 backdrop-blur-md
          border-r border-pink-100 transition-transform duration-300 overflow-y-auto
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}>
          <nav className="p-3 space-y-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${isActive
                    ? "bg-pink-50 text-pink-600 shadow-sm"
                    : "text-gray-600 hover:bg-pink-50/50 hover:text-pink-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={18} className={isActive ? "text-pink-500" : "text-gray-400"} />
                    {label}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-black/20 z-20 md:hidden" onClick={() => setMobileOpen(false)} />
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}