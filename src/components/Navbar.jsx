import { FaHome, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-blue-600">
        Pixora
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-lg px-4 py-2 w-80 outline-none"
      />

      {/* Icons */}
      <div className="flex gap-6 text-2xl text-gray-700">
        <FaHome className="cursor-pointer hover:text-blue-600" />
        <FaBell className="cursor-pointer hover:text-blue-600" />
        <FaUserCircle className="cursor-pointer hover:text-blue-600" />
      </div>
    </nav>
  );
}

export default Navbar;