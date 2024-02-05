import { NavLink, Outlet } from "react-router-dom";
import { TvIcon } from "../../components/icon/TvIcon";

export const RootLayout = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top p-3"
        data-bs-theme="dark"
      >
        <div className="container">
          <div className="navbar-brand d-flex align-items-center gap-3">
            <TvIcon />
            <strong>Movie APP</strong>
          </div>

          <div className="navbar-nav">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="movies" className="nav-link">
              Movies
            </NavLink>
            <NavLink to="about" className="nav-link">
              About
            </NavLink>
          </div>
        </div>
      </nav>

      <section>
        <main>
          <Outlet />
        </main>
      </section>
    </>
  );
};
