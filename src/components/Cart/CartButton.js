import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { layoutActions } from "../../store/layout-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const handleCartToggle = () => {
    dispatch(layoutActions.toggle());
  };

  return (
    <button className={classes.button} onClick={handleCartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
