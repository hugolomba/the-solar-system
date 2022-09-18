import "./ErrorPage.css";
import error from "../img/error.png";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <img className="error-img" src={error} />
      <p>Hey, parece que a página não existe no nosso universo.</p>
    </div>
  );
};

export default ErrorPage;
