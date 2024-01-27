import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { layoutActions } from "../../store/layout-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const badge = useSelector((state) => state.cart.badge);
  const handleCartToggle = () => {
    dispatch(layoutActions.toggle());
  };

  return (
    <button className={classes.button} onClick={handleCartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
