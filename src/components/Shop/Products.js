import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "product 1",
    price: 10,
    description: "description of p1",
  },
  {
    id: "p2",
    title: "product 2",
    price: 20,
    description: "description of p2",
  },
  {
    id: "p3",
    title: "product 3",
    price: 30,
    description: "description of p3",
  },
  {
    id: "p4",
    title: "product 4",
    price: 40,
    description: "description of p4",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_DATA.map((item)=>{
            return <ProductItem item={item} key={item.id} />
          })
        }
      </ul>
    </section>
  );
};

export default Products;
