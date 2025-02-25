import Home from "./Components/home";
import Navbar from "./Components/navbar";
import { useState, useEffect } from "react";
import useUserStore from "./stateManagement/userInfoStore";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);

  // On page load, check if the user is already logged in. (If user info is stored in local storage)
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    // If a token is found, send the token to the backend to verify if it's valid
    if (token) {
      fetch("http://your-backend.com/verify-token", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // Token is valid, user is logged in. Stores user info in the state
          if (data.isValid) {
            setIsLoggedIn(true);
            setToken(data.token);
            setUser({
              name: data.user.name,
              email: data.user.email,
            });
          }
          // Token is invalid or expired
          else {
            setIsLoggedIn(false);
          }
        })
        .catch((error) => {
          console.error("Error verifying token:", error);
          setIsLoggedIn(false); // Error means the user is not logged in
        });
    } else {
      setIsLoggedIn(false); // No token found, user is not logged in
    }
  }, [setIsLoggedIn, setToken, setUser]);

  return (
    <div className="App">
      {isLoggedIn ? <p>User is logged in</p> : <p>User is not logged in</p>}
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
