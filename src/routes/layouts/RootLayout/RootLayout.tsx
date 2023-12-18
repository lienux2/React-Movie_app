import { NavLink, Outlet } from "react-router-dom"

export const RootLayout = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container justify-content-center align-items-center">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to="movies" className="nav-link">Movies</NavLink>
                            </li>
                            <li className={"nav-item active"}>
                                <NavLink to="about" className="nav-link">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <section>
                <main>
                    <Outlet />
                </main>
            </section>
        </>
    )
}