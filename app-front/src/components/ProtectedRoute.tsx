import { useAuth } from "@/hooks/auth/useAuth";
import React from "react";

const ProtectedRoute = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Wrapper: React.FC<P> = (props) => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
      return <div>Loading...</div>; // Optionally, you can return a loading spinner or some placeholder content
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default ProtectedRoute;
