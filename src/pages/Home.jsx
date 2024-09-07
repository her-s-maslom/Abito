import { useOutletContext } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { sideArray } from "../constants";

export const Home = () => {
  const { products } = useOutletContext();

  return (
    <section className="content">
      <div className="container">
        <div className="content__box">
          <div className="content__main">
            <h2 className="content__main-title">Рекомендации для вас</h2>
            <div className="content__main__list">
              {products.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  price={card.price}
                  address={card.address}
                  date={card.date}
                  img={card.img}
                />
              ))}
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
      </div>
    </section>
  );
};
