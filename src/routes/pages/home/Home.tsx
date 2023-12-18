import style from './Home.module.css'

export const Home = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <div className={style.content}>
                                <h1>What is this project?</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div>
                                <p>This project is really interesting. Not only we can test what we have learned but also be creative. I am not 100% confident how everthing works, but what I feel proud of what I can do now. I have some mistakes, I do some things not how I am suppose to and some things I do have to look up on how to do them. But till this moment I did know few basics from html and css. But look at me now!</p>
                                <p>Here is the task I had:</p>
                                <ul>
                                    <li>
                                        Ask for array to ChatGPT with 6 key/value pairs.
                                    </li>
                                    <li>
                                        There has to be 3 navigations
                                    </li>
                                    <li>
                                        Have to implement delete option
                                    </li>
                                    <li>
                                        Each movie has its own page with details
                                    </li>
                                    <li>
                                        Error page if page not found
                                    </li>
                                    <li>
                                        Movie card is seperate component
                                    </li>
                                    <li>
                                        React Query Hooks have to be in seperate file
                                    </li>
                                </ul>
                                <p>Bonus:</p>
                                <ul>
                                    <li>
                                        Change language
                                    </li>
                                    <li>
                                        Zod validation
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


// Chat GPT it jāpaprasa masīvs ar Filmām (vismaz 6 keys), kur ir vismaz 10 ieraksti un jāieliek json-server DB.

// Prasības:
// Applikācja ir trīs sadaļas:
// Par projektu - info par mājasdarbu
// Filmu saraksts - saraksts ar filmām
// Par autoru - info par autoru

// Filmas ir jāvar izdzēst, un kad tas tiek izdarīt visas filmas tiek paprasītas no DB pa jaunu (invalidate query).

// Katrai filmai ir arī savs atvēruma skats, kurā atšķirībā no list skata rādās arī komentāri un Komentārus ir jāvar arī pievienot.

// Ja filma netika atrasta, ir jāsūta uz 404 lapu.

// Filmas kartiņa ir atsevišķs komponents.

// Visiem react-query hookiem ir jābūt savos izolētos failos, kā mēs to darijām nodarbībā.

// Jāizmanto:
// React router
// React Query
// React
// CSS modules.

// Bonuss:
// Applikācijā ir iespējams nomainīt valodu, kur teksti, kas nenāk no DB tulkojās.
// Pievienojot komentārus datus validē ar zod

// Jāizmanto
// zod
// react-i18next