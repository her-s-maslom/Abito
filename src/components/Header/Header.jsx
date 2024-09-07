import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__box">
          <Link to={"/"} className="header__logo">
            <img
              className="header__logo-image"
              src="/image/logo.svg"
              width="27"
              height="27"
              loading="lazy"
              alt="Logo"
            />
            <span className="header__logo-name">Abito</span>
          </Link>
          <div className="header__controls">
            <button className="button button--outline">
              Вход и регистрация
            </button>
            <button className="button button--primary">
              Подать объявление
            </button>
          </div>

          <div className="header__burger">
            <img
              src="/image/burger.svg"
              loading="lazy"
              width="30"
              height="15"
              alt="Burger menu"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
