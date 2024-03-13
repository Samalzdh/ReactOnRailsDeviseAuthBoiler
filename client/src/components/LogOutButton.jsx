import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/authSlice"; // Assurez-vous que le chemin d'importation est correct.
import { LogoutFetch } from "../services/authService";

export default function LogOutButton() {
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      await LogoutFetch();
      dispatch(logout()); // Dispatch l'action de déconnexion
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Failed to log out:", error.message);
    }
  };

  // Utilisez un Link ou un NavLink pour la navigation, pas dans le bouton de déconnexion
  return (
    <Link to="/login" onClick={handleClick} style={{ textDecoration: "none" }}>
      Log Out
    </Link>
  );
}
