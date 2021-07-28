import React, { useState } from "react";
import AppRouter from "components/Router";
import {authservice} from "fbase";

function App() {
  console.log(authservice.currentuser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <AppRouter isLoggedIn = {isLoggedIn} />;
}

export default App;
