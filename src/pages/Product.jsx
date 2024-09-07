import { useOutletContext, useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { sideArray } from "../constants";

export const Product = () => {
  const { products } = useOutletContext();
  const { id } = useParams();
  const findProduct = products.find((p) => p.id === +id);

  return (
    <section className="content">
      <div className="container">
        {findProduct ? (
          <div className="content__box">
            <div className="content__product">
              <div className="content__product__left">
                <h2 className="content__product-title">{findProduct.title}</h2>
                <img
                  className="content__product-image"
                  src={findProduct.img}
                  loading="lazy"
                  width="460"
                  height="357"
                  alt="Product img"
                />
                <p className="content__product-text">
                  {findProduct.description}
                </p>
              </div>
              <div className="content__product__right">
                <h2 className="content__product-price">{findProduct.price}</h2>
                <button className="button button--primary button--large">
                  Показать телефон
                </button>
              </div>
            </div>

            <div className="content__side">
              <h3 className="content__side-title">Сервисы и услуги</h3>
              <div className="content__side-box">
                <div className="content__side-list">
                  {sideArray.map((card) => (
                    <Sidebar
                      key={card.key}
                      title={card.title}
                      description={card.description}
                      img={card.img}
                    />
                  ))}
                </div>
                <div className="content__side__footer">
                  <p className="content__side__footer--item">
                    © ООО «Абито», 2011–2021
                  </p>
                  <a href="#!" className="content__side__footer--item">
                    Политика конфиденциальности
                  </a>
                  <a href="#!" className="content__side__footer--item">
                    Обработка данных
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2>Такого товара не существует!</h2>
        )}
      </div>
    </section>
  );
};
