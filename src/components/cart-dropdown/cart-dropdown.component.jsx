import React from 'react'
import {connect} from 'react-redux'
import  CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.component.scss'
import CartItem from '../card-item/cart-item.component'
const CartDropdown =({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        {
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            )) 
        }
        <CustomButton> Go To CHECKOUT</CustomButton>
    </div>
)
const mapStateToprops =({cart: {cartItems}})=>({
    cartItems 
});
export default connect( mapStateToprops)(CartDropdown); 