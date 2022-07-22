import axios from "axios";
import { Spinner } from "gestalt";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getUserDetails } from "./actions/UserAction";
import { getCsrfToken } from "./actions/tokenActions";
import LoggedInNavbar from "./Components/LoggedInNavbar";
import Navbar from "./Components/Navbar";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import NewsFeed from "./Pages/NewsFeed";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const { loginLoading, err, loggedIn, loginDetails } = login;
  // const token = useSelector((state) => state.token);
  // const { loading, csrfToken } = token;
  // useEffect(() => {
  //   if (loggedIn) {
  //     console.log(loggedIn);
  //   }
  // }, [loggedIn]);
  // const Dologin = async () => {
  //   try {
  //     const res = await axios.post(
  //       "http://localhost/photo_sharing_website/public/user/login",
  //       {
  //         email: "s@k.com",
  //         password: "1345",
  //       }
  //     );
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err, "err");
  //   }
  // };
  const getUserFromStorage = () => {
    if (localStorage.getItem("user") && localStorage.getItem("user") !== "") {
      return localStorage.getItem("user");
    } else {
      return 0;
    }
  };
  useEffect(() => {
    if (getUserFromStorage() !== 0) {
      console.log(getUserFromStorage());
      dispatch(getUserDetails(parseFloat(getUserFromStorage())));
    }
  }, []);
  // useEffect(() => {
  //   if (loggedIn) {
  //     if (getUserFromStorage() === 0 && loginDetails.id !== undefined) {
  //       localStorage.setItem("user", loginDetails.id);
  //     }
  //   }
  // }, [loggedIn]);
  if (loginLoading) {
    return <Spinner show={true} accessibilityLabel="Example spinner" />;
  }

  return (
    <BrowserRouter>
      {!loggedIn ? <Navbar /> : <LoggedInNavbar />}
      <Switch>
        {!loggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/" component={NewsFeed} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/events" component={Events} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
