import { Link } from "react-router-dom"
import style from './Error.module.css'

export const Error = () => {
    return (
        <div className="conteiner error-container">
            <div className="row">
                <div className="col error">
                    <h1 className={style.heading}>PAGE NOT FOUND</h1>
                    <h3>Do you need help?</h3>
                    <p>Click the magic button!</p>
                    <Link to="/">
                        <button>Magic!</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}