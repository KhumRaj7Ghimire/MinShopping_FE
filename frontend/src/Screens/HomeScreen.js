import React, { useEffect } from "react";

// Import useDispatch and useSelector
import { useDispatch, useSelector } from "react-redux";

// React Bootstrap
import { Col, Row } from "react-bootstrap";

import Product from "../Components/Product";
import Message from "../Components/Message";
import Loader from "../Components/Loader";

// Actions
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  // Initializing Dispatch
  const dispatch = useDispatch();

  // Grab ProductList from State
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className='py-3'>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product, idx) => (
            <Col key={idx} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
