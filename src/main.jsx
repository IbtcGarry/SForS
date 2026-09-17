import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Entry point: mounts the React tree into the empty <div id="root"> in
// index.html. This is the very first JS that runs.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Turns on URL-based routing using the browser's History API. This
        is what makes <NavLink>/<Link> and the <Routes>/<Route> matching
        in App.jsx work at all -- without it those components do nothing. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  // StrictMode is a React development-only wrapper (renders nothing
  // itself). It makes React intentionally double-invoke certain
  // functions in development to help surface bugs early. It's stripped
  // out automatically in production builds.
);
