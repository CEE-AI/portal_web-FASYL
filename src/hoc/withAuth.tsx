import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

// Define the HOC
const withAuth = <P extends object>(WrappedComponent: React.FC<P>) => {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    // Redirect to login if not authenticated
    React.useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [isAuthenticated, router]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  // Set the displayName for better debugging
  ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return ComponentWithAuth;
};

export default withAuth;
