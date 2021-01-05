import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Container,
  ListGroup,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../../actions/CartActions";
import { FaTrashAlt } from "react-icons/fa";

function Cart({ match, location, history }) {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <Container>
      <Row>
        <Col md={8}>
          <h4 className="mt-4 mb-3 p-3">YOUR CART</h4>
          {cartItems.length === 0 ? (
            <h5>
              Your cart is empty{" "}
              <Link className="link" to="/">
                Go Back
              </Link>
            </h5>
          ) : (
            <ListGroup.Item variant="flush" className="mt-4 mb-3 p-3 shadow">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={5} lg={3}>
                      <figure className="figure">
                        <Image
                          src={"http://apis.restroqr.link:4040/" + item.image}
                          className="figure-img img-fluid rounded"
                          alt={item.menuName}
                        />
                      </figure>
                    </Col>
                    <Col md={3} className="mb-3 cart-title">
                      <Link className="link" to={`/product/${item.product}`}>
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2} className="mb-2 cart-price">
                      <b>₹ {item.price}</b>
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        className="mt-3 qty "
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.quantity).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col>
                      <Button
                        variat="light"
                        onClick={() => removeFromCartHandler(item.product)}
                        className="mt-3 cart-btn mx-auto border-0"
                      >
                        <FaTrashAlt />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup.Item>
          )}
        </Col>
        <Col md={4} lg={4}>
          <ListGroup variant="flush" className="mt-4 mb-3 p-3 shadow">
            <ListGroup.Item>
              <h2 className="mt-4 mb-3 p-3">
                The total amount of (
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
              </h2>
              <b>
                ₹
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </b>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                variat="light"
                onClick={checkoutHandler}
                className="btn-block border-0"
                disabled={cartItems.length === 0}
              >
                Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default Cart;
