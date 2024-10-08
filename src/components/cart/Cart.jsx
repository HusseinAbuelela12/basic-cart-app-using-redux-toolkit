import React from 'react';
import { Button, Container, Table ,Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCart } from '../../rtk/slices/Cart-slice';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0)
    return (
    <Container className='mt-5 pt-5'>
        <h1>Welcome to cart</h1>
        <Button className='mt-3 mb-5' onClick={() => dispatch(clear())}> Clear All </Button>
        <h5 className='mb-4'>Total price : {totalPrice.toFixed(2)} $</h5>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Title</th>
                <th>Img</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((product) => {
                    return (
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td><Image style={{width:"100px"}} alt='image' src={product.image}/></td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td><Button variant='danger' onClick={() => dispatch(deleteFromCart(product))}>Delete</Button></td>
                    </tr>
                    )
                })}
                
            </tbody>
        </Table>
    </Container>
    )
}

export default Cart;