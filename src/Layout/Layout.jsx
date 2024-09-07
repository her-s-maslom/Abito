import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";
import { cardArray } from "../constants";

export const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchArray = () => {
    setProducts(
      cardArray.filter(
        (p) => p.title.includes(searchText) || p.price.includes(searchText)
      )
    );
  };

  useEffect(() => {
    setProducts(cardArray);
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <div className="search__box">
              <input
                className="search__input"
                value={searchText}
                type="text"
                onChange={handleSearch}
              />
              <button
                className="button button--primary search__button"
                onClick={handleSearchArray}
              >
                <img
                  className="search__button-icon"
                  src="/image/search.svg"
                  loading="lazy"
                  width="15"
                  height="15"
                  alt="Search logo"
                />
                <span className="search__button-text">Найти</span>
              </button>
            </div>
          </div>
        </section>

        <Outlet context={{ products }} />
      </main>
    </>
  );
};
