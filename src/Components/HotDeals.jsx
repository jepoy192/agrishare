import Title from "./Title";
import { hots } from "../data";

const HotDeals = () => {
  return (
    <section>
      <Title title="Hot" subTitle="Deals" />

      {hots.map((hot) => {
        const { id, img, title, feedBack, paragraph } = hot;
        return (
          <article key={id}>
            <img src={img} alt={title} />
            <div>
              <h3>{title}</h3>
            </div>
            <div>
              <h4>{feedBack}</h4>
              <p>{paragraph}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default HotDeals;
