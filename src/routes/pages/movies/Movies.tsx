import axios from "axios"
import { Link } from "react-router-dom"
import style from './Movies.module.css'
import { useQuery } from "@tanstack/react-query"

type Movies = {
    id: number,
    title: string,
    release_year: number,
    rating: number,
}

export const Movies = () => {

    const {data: movies} = useQuery({
        queryKey: ['movies'],
        queryFn: () => {
           return axios.get<Movies[]>('http://localhost:3000/movies')
           .then (({data}) => {
            return data;
           });
        },
    });    

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">

                    {movies?.map(({ id, title, release_year, rating }: Movies) => (
                        <div className="col-3 movie-card" key={id}>
                            <div className={`${style.title} ${style.wordBreak}`}>
                                <Link to={id.toString()} key={id}>
                                    <h1>{title}</h1>
                                </Link>
                            </div>

                            <div className={style.ratingAndRelease}>
                                <div>
                                    <h6>Rating</h6>
                                    <p>{rating}</p>
                                </div>
                                <div>
                                    <h6>Release year</h6>
                                    <p>{release_year}</p>
                                </div>

                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}