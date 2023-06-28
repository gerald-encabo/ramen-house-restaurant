import { FaTimes } from 'react-icons/fa';
import { CartSidebarButton, RootState } from "@/types/listTypes";
import Button from '@/components/Button';
import { useSelector } from 'react-redux'
import CartSidebarItemList from '@/components/CartSidebarItemList';
import '@/styles/cart-sidebar.scss';

const CartSideBar = ({handleCartSidebar}: CartSidebarButton) => {

    // Get current value from redux store 
    const cartProducts = useSelector((state: RootState) => state.cart.cartItems)
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount)
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity)
  
    return (
      <div className='cart-sidebar'>
        <div className='cart-sidebar-container'>

          <div className='cart-sidebar-close' onClick={handleCartSidebar}>
            <FaTimes />
          </div>

          <div className='cart-sidebar-list'>
              {
                cartProducts.length === 0
                ? <h2 className="text-center m-5">No item added to the cart</h2> 
                : cartProducts.map((item: any, key: number) => (
                    <CartSidebarItemList item={item} key={key} />
                  ))
              }
          </div>

          <div className='cart-sidebar-info'>
              {
                cartProducts.length === 0
                ? ''
                : <>
                    <div className='cart-sidebar-total-and-price'>
                      <span className='cart-sidebar-total_quantity'>Quantity: {totalQuantity}</span>
                      <span className='cart-sidebar-total_price'>Subtotal: ${Number(totalAmount).toFixed(2)}</span>
                    </div>
                    <div onClick={handleCartSidebar}>
                      <Button button="Checkout" />
                    </div>
                  </>
              }
           </div>
          
        </div>
      </div>
    )
  }
  export default CartSideBar