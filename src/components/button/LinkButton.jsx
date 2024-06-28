import { Link } from "react-router-dom";
import "../../styles/LinkButton.css";

const LinkButton = ({ route, text }) => {
  return (
    <Link to={route} className="recomendBtton">
      {text}
    </Link>
  );
};

export default LinkButton;
