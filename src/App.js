import { useCallback, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { layoutActions } from "./store/layout-slice";
import Notification from "./components/UI/Notification";

function App() {
  const dispatch = useDispatch();
  const isCartVisible = useSelector((state) => state.layout.isCartVisible);
  const showNotification = useSelector((state) => state.layout.notification);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(
      layoutActions.setNotification({
        status: "pending",
        message: "Pending...",
        title: "Data sending...",
      })
    );
    const sendCartData = async () => {
      const response = await fetch(
        "https://react-ecom-bootstrap-default-rtdb.asia-southeast1.firebasedatabase.app/shopping.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        dispatch(
          layoutActions.setNotification({
            status: "error",
            message: "cart data sending failed",
            title: "Data sending failed",
          })
        );
        throw new Error("cart data sending failed");
      }
      dispatch(
        layoutActions.setNotification({
          status: "succes",
          message: "cart data sending succeful",
          title: "Successfully sent data",
        })
      );
    };
    sendCartData().catch(() => {
      dispatch(
        layoutActions.setNotification({
          status: "error",
          message: "cart data sending failed",
          title: "Data sending failed",
        })
      );
    });
  }, [cart]);
  return (
    <>
      {showNotification && (
        <Notification
          status={showNotification.status}
          title={showNotification.title}
          message={showNotification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
