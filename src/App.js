import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";

import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  // debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path="/dialogs" component={Dialogs} /> */}
          {/* <Route
            path="/dialogs"
            render={() => {
              <Dialogs />;
            }}
          /> */}
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.DialogsPage} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route
            path="/Profile"
            render={() => <Profile state={props.state.profilePage} />}
          />

          {/* <Route path="/profile" posts={posts} component={Profile} /> */}
          {/* <Route path="/news" component={News} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
