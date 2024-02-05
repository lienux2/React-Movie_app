import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../../components/button/Button";
import { StarIcon } from "../../components/icon/StarIcon";
import { Comments } from "../comments/Comments";
import { AddComment } from "../comments/AddComment";

type MovieDetails = {
  id: number;
  title: string;
  genre: string;
  director: string;
  release_year: number;
  rating: number;
  main_actor: string;
  comments: string;
  description: string;
  imageLarge: string;
};

export const Movie = () => {
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const [commentCount, setCommentCount] = useState("");
  const [seeComments, setSeeComments] = useState<boolean>(true);
  const [seeAddComment, setSeeAddComment] = useState<boolean>(false);
  const { id } = useParams();

  const moviesQuery = useQuery({
    queryKey: ["movies", id],
    queryFn: () => useGetMoviesById(),
  });

  // @ts-ignore
  const commentQuery = useQuery({
    queryKey: ["comments"],
    queryFn: () => useGetComments(),
    refetchOnMount: "always",
  });

  const useGetMoviesById = () => {
    axios.get(`http://localhost:3000/movies/${id}`).then(({ data }) => {
      setMovieDetails(data);
    });
  };

  const useGetComments = () => {
    axios
      .get(`http://localhost:3000/comments?movieId=${id}`)
      .then(({ data }) => {
        setCommentCount(data);
      });
  };

  const useDeleteMovie = () => {
    axios.delete(`http://localhost:3000/movies/${id}`).then(({ data }) => {
      setMovieDetails(data);
    });
  };

  if (moviesQuery.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  const handleSeeComments = () => {
    setSeeComments(!seeComments);
  };

  const handleAddComment = () => {
    setSeeAddComment(!seeAddComment);
  };

  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-1 offset-1">
            <Button
              buttonName="Back"
              buttonStyle="btn-primary"
              click={() => {
                navigate("/movies");
                useGetComments();
              }}
            />
          </div>
          <div className="col-1 offset-8">
            <Button
              buttonName="Delete"
              buttonStyle="btn-danger"
              click={() => {
                useDeleteMovie();
                navigate("/movies");
              }}
            />
          </div>
        </div>
      </div>
      {movieDetails ? (
        <>
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  className="w-100"
                  src={movieDetails.imageLarge}
                  alt="image"
                />
              </div>
            </div>
            <div className="row m-4">
              <div className="col-6">
                <div className="d-flex align-items-center gap-3">
                  <h1 className="text-start">{movieDetails.title}</h1>
                  <span className="text-bg-info p-2 rounded-3">
                    {movieDetails.genre}
                  </span>
                </div>
                <p>
                  <strong>Directed by: </strong>
                  {movieDetails.director}
                </p>
                <p>
                  <strong>Lead role: </strong>
                  {movieDetails.main_actor}
                </p>
              </div>
              <div className="col-2 offset-4">
                <div className="d-flex gap-2 align-items-center">
                  <span className="fs-1">{movieDetails.rating}/10</span>
                  <StarIcon />
                </div>
                <p>
                  <strong>Release year: </strong>
                  {movieDetails.release_year}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="px-4">
                  <strong>Description:</strong>
                </p>
                <p className="px-5">{movieDetails.description}</p>
              </div>
            </div>
            <div className="row text-left">
              <div className="col d-flex gap-3">
                <Button
                  buttonName={`Comments (${commentCount.length})`}
                  buttonStyle="btn-dark"
                  click={handleSeeComments}
                />
                <Button
                  buttonName="Add Comment"
                  buttonStyle="btn-dark"
                  click={handleAddComment}
                />
              </div>
            </div>
            {seeAddComment ? (
              <>
                <div className="row">
                  <div className="col">
                    <AddComment />
                  </div>
                </div>
              </>
            ) : (
              <div></div>
            )}
            {seeComments ? (
              <>
                <div className="row">
                  <div className="col d-flex flex-column justify-content-center align-items-center mx-5">
                    <Comments />
                  </div>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Loading...</h1>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};
