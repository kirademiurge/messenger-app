/* @refresh reload */
import { render } from "solid-js/web";
import { lazy } from "solid-js";
import { Router } from "@solidjs/router";

const App = lazy( () => import("./app") );

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
