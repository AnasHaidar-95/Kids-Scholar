import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  return (
    <div className="bg-[#bb4fa9] text-gray-100 w-64 min-h-screen p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">Admin Panel</h1>
      <nav className="flex flex-col space-y-4">
        <Link
          to="/AdminDashboard"
          className="hover:bg-[#a13d93] rounded px-3 py-2 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/AdminUser"
          className="hover:bg-[#a13d93] rounded px-3 py-2 transition"
        >
          Users
        </Link>

        <Link
          to="/AdminStory"
          className="hover:bg-[#a13d93] rounded px-3 py-2 transition"
        >
          Stories
        </Link>

        <Link
          to="/AdminGame"
          className="hover:bg-[#a13d93] rounded px-3 py-2 transition"
        >
          Games
        </Link>
        <Link
          to="/AdminQuizz"
          className="hover:bg-[#a13d93] rounded px-3 py-2 transition"
        >
          Quizzes
        </Link>
        <Link
          to="/AdminLesson"
          className="hover:bg-[#a13d93] rounded px-3 py-2 transition"
        >
          Lessons
        </Link>
        <Link
          to="/"
          className="hover:bg-[#a13d93] rounded px-3 py-2 transition"
        >
          Go to Website
        </Link>
        <button
          onClick={handleLogout}
          className="hover:bg-[#a13d93] rounded px-3 py-2 transition text-left"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
