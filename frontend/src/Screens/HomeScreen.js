import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <h1 className="py-3">Latest Products</h1>
      <Row>
        {products.map((product, idx) => (
          <Col key={idx} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
