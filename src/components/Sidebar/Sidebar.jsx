import "./Sidebar.css";

export const Sidebar = ({ title, description, img }) => {
  return (
    <div className="side">
      <img
        className="side--image"
        src={img}
        alt={title}
        loading="lazy"
        width="30"
        height="30"
      />
      <h5 className="side--title">{title}</h5>
      <p className="side--text">{description}</p>
    </div>
  );
};
