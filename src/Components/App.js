import React, { useEffect, useState } from "react";
import Router from "Components/Router";
import { authService } from "fbase";
import GlobalStyles from "Components/GlobalStyles";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUserObj({
          displayName: user.displayName,
          photoURL: user.photoURL,
          time : user.metadata.creationTime,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <>
      {init ? (
        <>
        <Router
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
        <GlobalStyles />
        </>
      ) : (
        "Initializing..."
      )}
    </>
  );
}
      

export default App;