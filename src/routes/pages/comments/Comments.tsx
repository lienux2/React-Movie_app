import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import style from './Comments.module.css'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

type Movie = {
    id: number,
    comments: Comments[]
}

type Comments = {
    text: string,
    name: string
}

export const Comments = () => {

    const queryClient = useQueryClient();
    const { id } = useParams();
    const [comments, setComments] = useState({
        name: '',
        text: '',
    });

    const { data: movies } = useQuery<Movie[]>({
        queryKey: ["movies"],
        queryFn: () => {
            return axios.get(`http://localhost:3000/movies`)
                .then(({ data }) => {
                    return data;
                });
        },
    });

    const selectedMovie = movies?.find((movie) => movie.id === Number(id));

    const { mutateAsync: addComment } = useMutation({
        mutationFn: (newComment: Comments) => {
            return axios.post(`http://localhost:3000/movies//${id}/comments`, newComment);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["movies"]);
        }
    });

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                addComment(comments);
                                setComments({ name: '', text: '' });
                            
                            }}
                        >
                            <h1>Add your comment about movie</h1>
                            <div>
                                <label htmlFor="name">Name</label>
                                <br />
                                <input
                                    type="text"
                                    required
                                    value={comments.name}
                                    onChange={(e) => setComments({ ...comments, name: e.target.value })}
                                />
                                <br />
                                <label htmlFor="addcomment">Add comment:</label>
                                <br />
                                <textarea
                                    className={style.description}
                                    required
                                    id="addcomment"
                                    value={comments.text}
                                    onChange={(e) => setComments({ ...comments, text: e.target.value })}
                                />
                            </div>
                            <div>
                                <button type="submit" onClick={() => {
                                    addComment(newComment);
                                }}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {selectedMovie ? (
                        <div className="col-12">
                            {selectedMovie.comments.map(({ text, name }: Comments, index) => (
                                <div className={style.card}>


                                    <div>
                                        <img src={`https://picsum.photos/100/100?random=${id}`} alt="" />
                                    </div>

                                    <div key={index}>
                                        <h3>{name} says:</h3>
                                        <p>{text}</p>
                                    </div>


                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="col">
                            <p>Loading...</p>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}