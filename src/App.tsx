import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/sites/home/Home';
import Mixed from './components/sites/mixed/Mixed';

export default function App() {

  return (
    <>
      <div>
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mixed" element={<Mixed />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <div className="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/mixed">Mixed</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className="content">
        <Outlet />
      </div>
      <footer>
        <div className="footer">© 2024 VBC Volebo - 5610 Wohlen | info@volebo.ch | Impressum | Datenschutzerklärung | JAMOS</div>
      </footer>
    </div>
  );
}