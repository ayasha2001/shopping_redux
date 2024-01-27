import { useEffect } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  // useEffect(() => {
  //   const fetchData = async()=>{
  //     const response =await fetch(
  //       "https://react-ecom-bootstrap-default-rtdb.asia-southeast1.firebasedatabase.app/shopping.json"
  //     );
  //     if(!response.ok){
  //         throw new Error("cart data fething failed")
  //     }
  //     const json = await response.json()
  //     console.log(json)
  //   }
  //   fetchData()
  // },[]);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
