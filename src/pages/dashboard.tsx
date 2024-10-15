import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { userRole } = useAuth();
  const router = useRouter();

  // console.log(userRole);

  useEffect(() => {
    if (!userRole) {
      router.push("/login"); // Redirect to login if no role
    } else {
      switch (userRole) {
        case "Control":
          router.push("/control-dashboard");
          break;
        case "Audit":
          router.push("/audit-dashboard");
          break;
        case "Auth":
          router.push("/auth-dashboard");
          break;
        case "Maker":
          router.push("/maker-dashboard");
          break;
        case "Support":
          router.push("/support-dashboard");
          break;
        default:
          router.push("/login"); // Fallback
          break;
      }
    }
  }, [userRole, router]);

  return null; // No content to render
};

export default Dashboard;
