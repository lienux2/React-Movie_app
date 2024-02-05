import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";

export const Error = () => {
  return (
    <div className="container-xl">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
          <h1>PAGE NOT FOUND</h1>
          <p className="fs-5">
            Seems like this page doesn`t exist. Click here to get back to Home
            page.
          </p>
          <Link to="/">
            <Button buttonStyle="btn-primary" buttonName="Home" />
          </Link>
        </div>
      </div>
    </div>
  );
};
