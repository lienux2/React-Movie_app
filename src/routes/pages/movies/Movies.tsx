import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../../components/button/Button";
import { useState } from "react";

type Movies = {
  id: number;
  title: string;
  release_year: number;
  rating: number;
  image: string;
  genre: string;
};

export const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [search, setSearch] = useState("");

  let { data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      return axios
        .get<Movies[]>("http://localhost:3000/movies")
        .then(({ data }) => {
          return data;
        });
    },
    refetchOnMount: "always",
  });

  const handleSelectGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
  };

  let moviesByGenre = movies?.filter(
    (movie) =>
      movie.genre == selectedGenre &&
      movie.title.toLowerCase().includes(search.toLowerCase())
  );
  let allMovies = movies?.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredMovies = () => {
    return selectedGenre === "" ? allMovies : moviesByGenre;
  };

  const moviesToShow = filteredMovies();

  // @ts-ignore
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col d-flex justify-content-between">
            <div className="mb-4 mx-5 d-flex gap-2">
              <select
                className="p-1"
                value={selectedGenre}
                onChange={handleSelectGenre}
              >
                <option value="">All genres:</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Animation">Animation</option>
                <option value="Biography">Biography</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Musical">Musical</option>
                <option value="Romance">Romance</option>
                <option value="Sci-Fi">Sci-Fi</option>
              </select>
            </div>
            <div className="mb-4 mx-5 d-flex gap-2">
              <input
                type="text"
                placeholder="Search by title.."
                value={search}
                onChange={handleChange}
              />
              <Button buttonName="Search" buttonStyle="btn-primary" />
            </div>
          </div>
        </div>
        <div className="row gx-3 gy-3">
          {moviesToShow?.map(({ id, image }: Movies) => (
            <div className="col-3">
              <Link to={id.toString()} key={id}>
                <img
                  className="img-fluid image rounded-5 border border-black"
                  src={image}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
