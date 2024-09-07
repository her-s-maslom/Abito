import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ id, title, price, address, date, img }) => {
  return (
    <Link to={`/product/${id}`} className="card">
      <div className="card--image">
        <img src={img} alt={title} width="264" height="178" loading="lazy" />
      </div>
      <h5 className="card--title">{title}</h5>
      <strong className="card--price">{price}</strong>
      <div className="card--desc-box">
        <span className="card--desc">{address}</span>
        <span className="card--desc">{date}</span>
      </div>
    </Link>
  );
};
