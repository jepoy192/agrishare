import { category } from "../data";
import Title from "./Title";
const Categories = () => {
  return (
    <section>
      <Title title="Categories" />
      {category.map((info) => {
        return (
          <div key={info.id}>
            <img src={info.img} />
            <h3>{info.text}</h3>
          </div>
        );
      })}
    </section>
  );
};
export default Categories;
