import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuth() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      router.push("/auth/login"); // Redirect to login if not authenticated
    }
  }, [router]);

  return {
    isAuthenticated,
  };
}
