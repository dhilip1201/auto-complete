import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import {
  Jumbotron,
  FormControl,
  Row,
  Col,
  Button,
  
} from "react-bootstrap";
// import axios from "axios";
import { addToCart, getAllProduct } from "../../actions";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  
  const [products, setProducts] = useState([]);
  const [productsMatch, setProductsMatch] = useState([]);
  useEffect(() => {
    
      dispatch(getAllProduct());
    
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
     
      // const response = await axios.get(
      //   "http://localhost:2000/api/v1/allproducts"
      // );
      // console.log("RESPONSE", response.data.data)
      // setProducts(response.data.data);

      setProducts(product.products.data);
    };
    loadProducts();
  }, [product.products.data]);


  
  console.log("PRODUCT", product.products.data)


  const searchProducts = (text) => {
    let matches = products.filter((pro) => {
      const regex = new RegExp(`${text}`, "gi");
      return pro.product.match(regex);
    });
    setProductsMatch(matches);
  };

  return (
    <Layout>
      <Jumbotron style={{ background: "#fff" }} className="text-center">
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <h3>Search Your Product</h3>
            <FormControl
              type="text"
              placeholder="ex: sakthi masala"
              size="sm"
              className="mb-3"
              onChange={(e) => searchProducts(e.target.value)}
            />
          </Col>
        </Row>
        { productsMatch &&
          productsMatch.map((item, index) => (
            <div key={index}>
              <Col style={{border:"1px solid #ddd", textAlign:'left',padding:'5px',fontSize:"13px"}} md={{ span: 6, offset: 3 }}>
                
                
                <div style={{display:"flex", alignItems:"center",justifyContent:"space-between" }}>
                  <div>{item.product}</div>
                  <div><Button 
                  value={item.product} 
                   varient="primary"
                   onClick={() => {
                    const { _id, product } = item;
                    dispatch(addToCart({ _id, product }));
                    
                  }}
                   >Add</Button></div>
                
                
                </div>
              </Col>
              
            </div>
          ))}
      </Jumbotron>
    </Layout>
  );
};

export default Home;
