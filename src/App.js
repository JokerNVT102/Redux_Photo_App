// import Header from "components/Header";
// import NotFound from "components/NotFound";
import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

//Lazy load - code splitting là mới vào không load ngay mà vào /photos mới load
const Photo = React.lazy(() => import("./features/Photo"));
function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>loading ...</div>}>
        <BrowserRouter>
          <Header />
          {/* <ul>
            <li>
              <Link to="/photos">go to photo page</Link>
            </li>
            <li>
              <Link to="/photos/add">go to Add new photo page</Link>
            </li>
            <li>
              <Link to="/photos/edit">go to Edit photo page</Link>
            </li>
          </ul> */}
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
