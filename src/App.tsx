import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

// Page imports

import { About } from "./routes/pages/about/About";
import { Error } from "./routes/pages/error/Error";
import { Home } from "./routes/pages/home/Home";
import { Movies } from "./routes/pages/movies/Movies";
import { Movie } from "./routes/pages/movie/Movie";
import { Comments } from "./routes/pages/comments/Comments";

// Layout imports
import { RootLayout } from "./routes/layouts/RootLayout/RootLayout";
import { MoviesLayout } from "./routes/layouts/MoviesLayout.tsx/MoviesLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<MoviesLayout />}>
        <Route index element={<Movies />} />
        <Route path=":id" element={<Movie />}>
          <Route path="comments" element={<Comments />} />
        </Route>
      </Route>
      <Route path="about" element={<About />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
