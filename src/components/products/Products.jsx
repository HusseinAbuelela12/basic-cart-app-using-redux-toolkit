import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../rtk/slices/Products-slice';
import { addToCart } from '../../rtk/slices/Cart-slice';


const Products = () => {

    const products = useSelector((state) => state.products)
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProducts())
    } , [])
    
    return (
    <>
    <Container>
        <Row className='pt-5'>
            {products.map((product) => {
                return (
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-3" key={product.id}>
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" style={{ height: '300px' }} src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title.slice(0 ,40)}...</Card.Title>
                                <Card.Text>{product.description.slice(0 , 50)}...</Card.Text>
                                <Card.Text>{product.price}</Card.Text>
                                <Button variant="primary" onClick={() => {dispatch(addToCart(product))}}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
            
        </Row>
    </Container>
    </>
    )
}

export default Products;