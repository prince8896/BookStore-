import React from 'react';
import { useAuth } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

export default function LogoutButton() {
  const [authUser, setAuthUser] = useAuth();

  function handleLogout() {
    try {
      setAuthUser(null); // Clear the authenticated user
      localStorage.removeItem("users"); // Use correct key in quotes
      toast.success("Logout Successfully");
      
      // Optional: Close modal if it's a dialog
      const modal = document.getElementById("my_modal_3");
      if (modal && modal.tagName === "DIALOG") {
        modal.close();
      }

      // Redirect or update UI dynamically
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "An error occurred during logout");
    }
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}
