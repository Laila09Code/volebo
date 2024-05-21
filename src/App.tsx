import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/sites/home/Home';
import Mixed from './components/sites/mixed/Mixed';
import U23Damen from './components/sites/u23damen/U23Damen';
import U23Herren2 from './components/sites/u23herren2/U23Herren2';
import U23Herren1 from './components/sites/u23herren1/u23herren1';
import Herren5 from  './components/sites/herren5/Herren5';


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
            <Route path="u23damen" element={<U23Damen />} />
            <Route path="u23herren2" element={<U23Herren2 />} />
            <Route path="u23herren1" element={<U23Herren1 />} />
            <Route path="herren5" element={<Herren5 />} />


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
              <NavLink to="/">
                <img src="src/assets/volebo.png" alt="Volebo Logo" className="logo"></img>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/mixed">Mixed</NavLink>
            </li>
            <li>
              <NavLink to="/u23damen">U23 Damen</NavLink>
            </li>
            <li>
              <NavLink to="/u23herren1">U23 Herren 1</NavLink>
            </li>
            <li>
              <NavLink to="/u23herren2">U23 Herren 2</NavLink>
            </li>
            <li>
              <NavLink to="/herren5">Herren 5</NavLink>
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
        <div className="footer">© 2024 VBC Volebo - 5610 Wohlen | <a href="mailto:info@volebo.ch">info@volebo.ch</a> | Impressum | Datenschutzerklärung | <a href="https://www.jamos.ch/" className="laila">Jamos</a></div>
      </footer>
    </div>
  );
}