import style from './About.module.css'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'
import image9 from './images/image9.jpg'

export const About = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={style.heading}>
                                <h1>About developer of this project</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>Hi. My name is Liene and I am developer of this project.</p>
                            <p>My journey in programming starting in 12th grade when one of lessons was Programming basics.
                                I really liked it, but sadly didnt go after that dream. Most certainly you will ask why and I can answer that.
                                I was unsure about myself and my knowledge so that lead into fear that no school will accept me. I know, I know...
                                But I did what I did and later went to work regular jobs mostly as customer service consultant.</p>
                            <p>I have had few jobs between finishing school and this moment but the last 2 years I am unemployed. In february I had chance to study for free as nail care specialist. That is what I did for a while. I did nails. Wanna see results?</p>
                            <div className="container">
                                <div className="row my-3">
                                    <div className="col-4 d-flex justify-content-center">
                                        <img className={style.image} src={image1} alt="" />
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <img className={style.image} src={image2} alt="" />
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <img className={style.image} src={image3} alt="" />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-4 d-flex justify-content-center">
                                        <img className={style.image} src={image4} alt="" />
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <img className={style.image} src={image5} alt="" />
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <img className={style.image} src={image6} alt="" />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-4 d-flex justify-content-center">
                                        <img className={style.image} src={image7} alt="" />
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <img className={style.image} src={image8} alt="" />
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <img className={style.image} src={image9} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p>But then I found Codelex. Thought for a moment and decided to finally go after long lost dream of becoming a programmer. And as much as I do enjoy doing nail care service, that can be as extra what I enjoy doing. 😊</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}