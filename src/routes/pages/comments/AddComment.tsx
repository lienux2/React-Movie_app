import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button/Button";

type Comments = {
  text: string;
  name: string;
  movieId: string;
};

export const AddComment = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [comments, setComments] = useState({
    name: "",
    text: "",
    movieId: id,
  });

  const { mutateAsync: addComment } = useMutation({
    mutationFn: (newComment: Comments) => {
      return axios
        .post(`http://localhost:3000/comments?movieId=${id}`, newComment)
        .then(({ data }) => {
          return data;
        });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", "movies"] });
    },
  });

  return (
    <>
      <div className="container m-4 border p-5">
        <form
          className="d-flex flex-column align-items-center justify-content-center"
          onSubmit={() => {
            // @ts-ignore
            addComment(comments);
            setComments({ name: "", text: "", movieId: id });
          }}
        >
          <h1 className="mb-3">Add comment</h1>

          <div className="mb-3">
            <label htmlFor="floatingInput">Name:</label>
            <input
              type="text"
              required
              value={comments.name}
              className="form-control input"
              placeholder="Name..."
              onChange={(e) =>
                setComments({ ...comments, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="floatingTextarea2">Comments</label>
            <textarea
              className="form-control textarea"
              placeholder="Leave a comment here"
              required
              value={comments.text}
              onChange={(e) =>
                setComments({ ...comments, text: e.target.value })
              }
            ></textarea>
          </div>
          <div className="mt-3">
            <Button buttonName="Add" buttonStyle="btn-success" />
          </div>
        </form>
      </div>
    </>
  );
};
