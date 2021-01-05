import React, { useState, useEffect } from "react";
import { FaSortDown } from "react-icons/fa";
import { Button } from "antd";
import Checkboxfeature from "../common/checkbox/Checkboxfeature";
import axios from "axios";
import { Row, Col, Container, Dropdown, DropdownButton } from "react-bootstrap";
import Carousel from "../Myntra/Carousel";
import Product from "./Product";

const PostData = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://apis.restroqr.link:4040/product");
      console.log(res);
      setProducts(res.data.result);
    };

    fetch();
  }, []);
  return (
    <>
      <Carousel />
      <Container>
        {/* <div col-sm-12>
          <h1 className="menu-title">
            Our<strong> Food Menu</strong>
          </h1>
          <div class="title-line text-center">
            {" "}
            <span class="short-line"></span> <span class="long-line"></span>
          </div>
        </div> */}
        <hr />
        <div class="p-2 bg-white px-4">
          <div class="d-flex flex-row justify-content-between">
            <div class="d-flex flex-row align-items-center ">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="eat-filters">
                  <h6>
                    {" "}
                    EAT NOW{" "}
                    <FaSortDown
                      color="rgb(245, 226, 57)"
                      size="30"
                      className="eat-now"
                    />
                  </h6>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div class="d-flex flex-row align-items-center ">
              <div class="d-flex flex-row align-items-center">
                {/* <h5 class="mt-1">Sort by</h5> */}
                {/* <Button className="veg-btn">VEG</Button> */}
                <Button type="text" className="veg-btn">
                  VEG
                </Button>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="filters">
                    <img
                      src={
                        "https://static.cure.fit/assets/images/filter-black.svg"
                      }
                      className="img-filter"
                    />
                    <span className="ml-2">FILTERS</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                      <Checkboxfeature />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div class="d-flex flex-row align-items-center ml-3"></div>
            </div>
          </div>
        </div>
        <Row>
          <Col md={3}>
            <nav
              id="sidebarMenu"
              class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <span data-feather="home"></span>
                      Indian Meals
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="file"></span>
                      Indian Meals
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="shopping-cart"></span>
                      Indian Meals
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="users"></span>
                      Indian Meals
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="bar-chart-2"></span>
                      Indian Meals
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span data-feather="layers"></span>
                      Indian Meals
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </Col>
          <Col md={9}>
            <Row>
              {product.map((result, i) => (
                <Col md={4} sm={6} lg={6} key={result.id}>
                  <Product result={result} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default PostData;
