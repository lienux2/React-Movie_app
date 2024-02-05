import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

type Comments = {
  text: string;
  name: string;
  id: string;
  movieId: number;
};

export const Comments = () => {
  const { id } = useParams();

  const { data: comments } = useQuery<Comments[]>({
    queryKey: ['comments'],
    queryFn: () => {
      return axios
        .get(`http://localhost:3000/comments?movieId=${id}`)
        .then(({ data }) => {
          return data;
        });
    },
    refetchOnMount: "always",
  });

  return (
    <>
    {comments?.length === 0 ? (
      <div className="container">
          <div className="row border my-4 mx-5 p-3">
            <div className="col mx-3 d-flex justify-content-center">
              <h1>There is no comments at this time.</h1>
            </div>
          </div>
        </div>
    ) : (
      <>
      {comments?.map(({ text, name }: Comments) => (
        <div className="container">
          <div className="row border my-4 mx-5 p-3">
            <div className="col mx-3">
              <h1>{name} says:</h1>
              <p>{text}</p>
            </div>
          </div>
        </div>
      ))}
      </>
    )}
    </>
  );
};
