import React, { Suspense } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";

//Lazy load - code splitting là mới vào không load ngay mà vào /photos mới load
const Photo = React.lazy(() => import("./features/Photo"));
function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>loading ...</div>}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/photos">go to photo page</Link>
            </li>
            <li>
              <Link to="/photos/add">go to Add new photo page</Link>
            </li>
            <li>
              <Link to="/photos/edit">go to Edit photo page</Link>
            </li>
          </ul>
          <Switch>
            <Redirect exact form="/" to="photos" />
            <Route path="/photos" componen={Photo} />
            <Route componen={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
