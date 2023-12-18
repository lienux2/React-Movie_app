import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import style from './Movie.module.css'

type MovieDetails = {
    id: number,
    title: string,
    genre: string,
    director: string,
    release_year: number,
    rating: number,
    main_actor: string,
    comments: string
};

export const Movie = () => {

    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState<MovieDetails>();
    const { id } = useParams();

    const moviesQuery = useQuery({
        queryKey: ["movies", id],
        queryFn: () => useGetMoviesById(),
    });

    const useGetMoviesById = () => {
        axios.get('http://localhost:3000/movies/' + id)
            .then(({ data }) => {
                setMovieDetails(data);
            })
    };

    const useDeleteMovie = () => {
        axios.delete('http://localhost:3000/movies/' + id)
        .then(({ data }) => {
            setMovieDetails(data);
        });
    }

    if (moviesQuery.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Loading...</h1>
                    </div>
                </div>
            </div>
        )
    }

    let movieImageSrc = '';
    let movieDescription = '';

  if (movieDetails) {
    const { title } = movieDetails;

    if (title === 'The Matrix') {
      movieImageSrc = 'https://images.squarespace-cdn.com/content/v1/5b62ed1f697a9844e7f9d0de/1557748454052-Z1GDBK3Z7OI7K7VTJ92V/1392273106_be7dafdbb33d539349b4eb34a5808b98.jpg'; 
      movieDescription = `"The Matrix," directed by Lana and Lilly Wachowski and released in 1999, 
      is a groundbreaking science fiction film that has left an indelible mark on popular culture. 
      The story revolves around Thomas Anderson, played by Keanu Reeves, a computer programmer who goes by the alias Neo. 
      Neo discovers a mysterious world hidden behind the facade of reality—a world dominated by intelligent machines that have enslaved humanity. 
      The film explores themes of reality, identity, and the nature of consciousness.`
    } else if (title === 'Inception') {
        movieImageSrc = 'https://i1.sndcdn.com/artworks-000087427738-ztygzb-t500x500.jpg';
        movieDescription = `"Inception," the mesmerizing Sci-Fi marvel helmed by Christopher Nolan, invites 
        audiences on a riveting odyssey through the labyrinth of dreams. Unveiled in 2010, the film casts the 
        brilliant Leonardo DiCaprio as Dom Cobb, a virtuoso thief skilled in navigating dreamscapes to extract 
        coveted secrets. Garnering a stellar 8.8 rating, the movie intricately spins a tale where Cobb orchestrates 
        a team to execute an inception—implanting an idea into a subconscious.`
    } else if (title === 'The Shawshank Redemption') {
        movieImageSrc = 'https://m.media-amazon.com/images/I/61Xn6qnmcoL._UXNaN_FMjpg_QL85_.jpg';
        movieDescription = `"The Shawshank Redemption," a cinematic gem directed by Frank Darabont, unfolds 
        within the confines of Shawshank State Penitentiary. Released in 1994, the film navigates the transformative 
        journey of Andy Dufresne, portrayed by Tim Robbins, who finds solace in freedom amidst the harsh realities 
        of incarceration. Garnering acclaim with a timeless 9.3 rating, the movie resonates with the resilience of 
        the human spirit.`
    } else if (title === 'Pulp Fiction') {
        movieImageSrc = 'https://cdns-images.dzcdn.net/images/cover/f3d66e855e15ac75c9e3a085aa6697b6/500x500.jpg';
        movieDescription = `"Pulp Fiction," the iconic masterpiece directed by Quentin Tarantino, burst onto screens 
        in 1994, leaving an indelible mark on cinema. With its non-linear narrative and razor-sharp dialogue, the film 
        weaves together multiple interconnected stories, showcasing the seedy underbelly of Los Angeles. Tarantino's 
        distinctive style, melding wit and violence, earned the film critical acclaim and a cult following.`
    } else if (title === 'The Dark Knight') {
        movieImageSrc = 'https://cdns-images.dzcdn.net/images/cover/db24b10af9499e1e5098c2a2328f8ef2/500x500.jpg';
        movieDescription = `"The Dark Knight," directed by Christopher Nolan and released in 2008, stands as a defining 
        moment in superhero cinema. This gripping installment in Nolan's Batman trilogy sees Christian Bale reprising his 
        role as the caped crusader, with Heath Ledger delivering a legendary performance as the Joker. The film delves 
        into Gotham City's descent into chaos as Batman confronts the anarchic criminal mastermind.`
    } else if (title === 'Forrest Gump') {
        movieImageSrc = 'https://i1.sndcdn.com/artworks-000191327675-qzmfah-t500x500.jpg';
        movieDescription = `"Forrest Gump," a cinematic triumph directed by Robert Zemeckis, unfolded its heartfelt 
        narrative in 1994. The film chronicles the extraordinary life of Forrest, played by Tom Hanks, a man with a 
        seemingly simple mind but an extraordinary journey. With a mix of humor, poignancy, and historical resonance, 
        "Forrest Gump" takes us through decades of American history as seen through the eyes of its endearing protagonist.`
    } else if (title === `Schindler's List`) {
        movieImageSrc = 'https://cdns-images.dzcdn.net/images/cover/ed2414b07609770b01fa69221580ae37/500x500.jpg';
        movieDescription = `"Schindler's List," directed by Steven Spielberg and released in 1993, is a powerful and 
        haunting portrayal of one man's transformation amidst the horrors of the Holocaust. The film follows Oskar 
        Schindler, portrayed by Liam Neeson, a German businessman who initially seeks to profit from the war but undergoes 
        a profound change as he witnesses the atrocities committed against the Jewish people.`
    } else if (title === 'Titanic') {
        movieImageSrc = 'https://cdns-images.dzcdn.net/images/cover/daf0457ba21b59a4ecc05c690d6a9f6a/500x500.jpg';
        movieDescription = `Released in 1997 and directed by James Cameron, "Titanic" is an epic romance that unfolds 
        against the tragic backdrop of the RMS Titanic's ill-fated maiden voyage. The film stars Leonardo DiCaprio and 
        Kate Winslet as Jack and Rose, two passengers from different social classes who find love amid the ship's 
        impending disaster.`
    } else if (title === 'The Godfather') {
        movieImageSrc = 'https://i1.sndcdn.com/artworks-000141093736-kk3n8v-t500x500.jpg';
        movieDescription = `Directed by Francis Ford Coppola and released in 1972, "The Godfather" is a cinematic 
        masterpiece that redefined the crime genre. Based on Mario Puzo's novel, the film stars Marlon Brando as 
        Vito Corleone, the patriarch of a powerful Mafia family. As the family navigates power struggles and betrayals, 
        Michael Corleone, portrayed by Al Pacino, emerges as a reluctant heir.`
    } else if (title === 'La La Land') {
        movieImageSrc = 'https://cdns-images.dzcdn.net/images/cover/6693e6ad39c44db8a408375aded07d5d/500x500.jpg';
        movieDescription = `Released in 2016 and directed by Damien Chazelle, "La La Land" is a modern musical that 
        celebrates the magic of Hollywood and the pursuit of dreams. Starring Emma Stone and Ryan Gosling, the film 
        follows Mia, an aspiring actress, and Sebastian, a jazz musician, as they navigate love and ambition in 
        Los Angeles.`
    }
  }

    return (
        <>
        <section className={style.section}>
            <div className="container">
                <div className="row">
                    <div className="col-1 offset-1">
                        <button onClick={() => navigate('/movies')}>&lt;&lt; Back</button>
                    </div>
                    <div className="col-1 offset-8">
                        <button title="Delete Movie" className={style.delete} onClick={() => {
                            useDeleteMovie();
                            navigate('/movies');
                        }}>❌</button>
                    </div>
                </div>
            </div>
            </section>

            <section className={style.section}>
            <div className="container one-movie">
                <div className="row movie-card-one">

                    <div className="col-6 d-flex justify-content-center">
                        <img src={movieImageSrc} className={style.image} alt="" />
                    </div>
                    {movieDetails ? (
                        <>
                            <div className="col-6" key={id}>
                                <div className={style.movieCard}>
                                <h1 className={style.title}>{movieDetails.title}</h1>
                                <h4 className={style.genre}>{movieDetails.genre}</h4>
                                <p className={style.director}><strong>Directed by: </strong>{movieDetails.director}</p>
                                <p className={style.release_year}><strong>Release year: </strong>{movieDetails.release_year}</p>
                                <p className={style.rating}><strong>Rating: </strong>{movieDetails.rating}</p>
                                <p className={style.main_actor}><strong>Lead role: </strong>{movieDetails.main_actor}</p>
                                <br></br>
                                <p><strong>Description:</strong></p>
                                <p>{movieDescription}</p>
                                <Link to='comments'>
                                    <p>See comments</p>
                                </Link>
                            </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}

                </div>
            </div>
            </section>

            <Outlet />
        </>
    )
}