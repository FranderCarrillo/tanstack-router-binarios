export const useAuth = (username: string) => {
  const signIn = () => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", username); 
  };

  const signOut = () => {
    localStorage.removeItem("isAuthenticated");
  };

  const isLogged = () => localStorage.getItem("isAuthenticated") === "true";

  return { signIn, signOut, isLogged };
};

export type AuthContext = ReturnType<typeof useAuth>;

