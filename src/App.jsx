import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/layout/RightSidebar";
import MobileNav from "./components/layout/MobileNav";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Saved from "./pages/Saved";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="mx-auto flex w-full max-w-[1440px] gap-5 px-3 py-4 sm:px-5 lg:px-6 xl:px-8">
        <aside className="hidden w-[280px] shrink-0 xl:block">
          <div className="sticky top-24">
            <Sidebar />
          </div>
        </aside>

        <main className="min-w-0 flex-1 space-y-6 pb-24 md:pb-8">{children}</main>

        <aside className="hidden w-[300px] shrink-0 xl:block">
          <div className="sticky top-24">
            <RightSidebar />
          </div>
        </aside>
      </div>
      <MobileNav />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout><Home /></AppLayout>} />
      <Route path="/explore" element={<AppLayout><Explore /></AppLayout>} />
      <Route path="/profile" element={<AppLayout><Profile /></AppLayout>} />
      <Route path="/messages" element={<AppLayout><Messages /></AppLayout>} />
      <Route path="/notifications" element={<AppLayout><Notifications /></AppLayout>} />
      <Route path="/saved" element={<AppLayout><Saved /></AppLayout>} />
      <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
      <Route path="/not-found" element={<AppLayout><NotFound /></AppLayout>} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
}

export default App;