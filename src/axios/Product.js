import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
// import NavbarMenu from "../Myntra/Navbar";
// import SidebarMenu from "../components/menu/SidebarMenu";

function Product({ result }) {
  return (
    <>
      <Container>
        <div className="card-deck mt-3">
          <Card
            style={{ width: "20rem" }}
            className="mb-5 p-3 card bg-white border-0 mx-auto"
          >
            <div class="mx-auto img-zoom">
              <Card.Img
                className="card-img-top img-responsive"
                variant="top"
                src={"http://apis.restroqr.link:4040/" + result.productImage}
                alt={result.id}
              />
            </div>

            <Card.Body>
              <Card.Title>
                <h5>{result.menuName}</h5>
              </Card.Title>
              <Card.Subtitle className="text-muted mt-2">
                <img src="https://img.icons8.com/color/28/000000/vegetarian-food-symbol.png" />
                <img src="https://img.icons8.com/color/28/000000/non-vegetarian-food-symbol.png" />{" "}
                <p>{result.foodType}</p> | {result.calories}Cal
              </Card.Subtitle>
              <div className="card-price lead">₹{result.sellPrice}</div>
              <div className="text-muted lead">
                ₹<s>{result.regularPrice}</s>
              </div>
              <Link to={`/product/${result.id}`} className="link w-sm-100">
                <Button
                  size="lg"
                  variant="outline-secondary"
                  className="rounded-pill float-right"
                  // onClick={(e) => addToCart(result.id, 1)}
                >
                  Quick view <i class="icofont-culinary"></i>
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
export default Product;
