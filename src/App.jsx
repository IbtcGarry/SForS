import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Progress from "./pages/Progress.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

/**
 * The app shell every page renders inside: a shared Navbar + Footer with
 * the current page swapped in between by React Router.
 *
 * <Routes> looks at the current URL and renders whichever <Route>'s
 * `path` matches it in place of itself, while Navbar and Footer stay
 * mounted. This is why adding a new page/tab only needs one new <Route>
 * line here plus one new link in Navbar.jsx -- not a whole new layout.
 */
export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
