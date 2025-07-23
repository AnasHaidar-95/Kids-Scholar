import React, { useState, useEffect } from "react";
import { FaStar, FaSmile, FaRocket } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

const FloatingIcon = ({ Icon, style }) => (
  <Icon
    className="text-white opacity-10 text-[4rem] lg:text-[6rem] absolute animate-pulse pointer-events-none"
    style={style}
  />
);

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token =
          localStorage.getItem("authToken") ||
          document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
            "$1"
          );

        if (!token) return;

        const decoded = jwtDecode(token);
        const userId = decoded.user?.id || decoded.id;

        const response = await fetch(`/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error("Failed to fetch user data");

        const user = await response.json();
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleAvatarChange = async (event) => {
    const file = event.target.files[0];
    if (!file || !userData) return;

    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const token =
        localStorage.getItem("authToken") ||
        document.cookie.replace(
          /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );

      const response = await fetch(`/api/users/${userData._id}/avatar`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload avatar");

      const updatedUser = await response.json();
      setUserData(updatedUser);
    } catch (error) {
      console.error("Avatar upload failed:", error);
      alert("Failed to upload avatar.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#bb4fa9]"></div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen font-sans relative overflow-hidden"
      style={{
        background: `linear-gradient(to left, #d0eaf5 0%, #87CEEB 25%, #d0eaf5 50%, #87CEEB 75%, #d0eaf5 100%)`,
      }}
    >
      <FloatingIcon Icon={FaStar} style={{ top: "10%", left: "5%" }} />
      <FloatingIcon Icon={FaSmile} style={{ top: "50%", right: "10%" }} />
      <FloatingIcon Icon={FaRocket} style={{ bottom: "20%", left: "20%" }} />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-20 max-w-6xl mx-auto">
        {/* Left side image beside card */}
        <div className="w-full md:w-[400px] flex justify-center">
          <img
            src="../images/robot.png"
            alt="Decoration"
            className="w-full object-contain"
          />
        </div>

        {/* Profile card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full md:w-[500px]">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-[#bb4fa9] mb-2">
              My Profile
            </h1>
            <p className="text-lg text-gray-700">Account Information</p>
          </div>

          <div className="flex justify-center mb-6">
            <div
              className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-[#bb4fa9] cursor-pointer group"
              onClick={() => document.getElementById("avatarUpload").click()}
              title="Click to change avatar"
            >
              {userData?.avatar ? (
                <img
                  src={userData.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:opacity-80 transition"
                />
              ) : (
                <span className="text-4xl text-gray-500">
                  {userData?.name?.charAt(0) || "U"}
                </span>
              )}
              <input
                id="avatarUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <ProfileField label="Name" value={userData?.name} />
            <ProfileField label="Email" value={userData?.email} />
            <ProfileField label="Phone" value={userData?.phone} />
            <ProfileField label="Date of birth" value={userData?.dob} />
            <ProfileField
              label="Budget"
              value={userData?.budget ? `$${userData.budget}` : "Not provided"}
            />

            <div>
              <label className="block text-gray-500 mb-1">Progress</label>
              <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
                <div
                  className="bg-[#bb4fa9] h-4 transition-all duration-300"
                  style={{ width: `${userData?.progress || 0}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {userData?.progress ?? 0}% complete
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("authToken");
              document.cookie =
                "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              window.location.reload();
            }}
            className="w-full mt-6 py-3 bg-[#bb4fa9] hover:bg-[#a24296] text-white font-bold rounded-lg transition duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileField = ({ label, value }) => (
  <div>
    <label className="block text-gray-500 mb-1">{label}</label>
    <div className="w-full p-3 bg-gray-50 rounded-lg">{value}</div>
  </div>
);

export default Profile;
