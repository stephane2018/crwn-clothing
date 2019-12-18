import React from 'react'; 
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {toogleCartHidden} from "../../redux/cart/cart.actions"
import {connect} from 'react-redux'
import './cart-styles.scss'
import CartItem from '../card-item/cart-item.component';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
const CartIcon=({toogleCartHidden, itemsCount})=>(
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemsCount}</span> 
    </div>
); 

const mapDispatchToProps =(dispatch) =>({
    toogleCartHidden: ()=> dispatch(toogleCartHidden())
})
const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);