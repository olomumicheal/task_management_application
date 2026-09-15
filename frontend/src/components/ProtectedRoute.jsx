import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  // Not logged in at all
  if (!token) return <Navigate to="/login" replace />;

  // Logged in, but not an admin
  if (adminOnly && user?.role !== "admin") return <Navigate to="/dashboard" replace />;

  return children;
}