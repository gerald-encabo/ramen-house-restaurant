import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { cartActions} from '@/redux/cartSlice';
import '@/styles/cart-sidebar-item-list.scss';

const CartSidebarItemList = (item: any) => {

  const { id, name, price, img, quantity } = item

  const dispatch = useDispatch()

  const incrementItem = () => {
    dispatch(cartActions.addItem({
      id,
      name,
      price,
      img,
      quantity: 1,
      totalPrice: price
    })) 
  }

  const decrementItem = () => {
    dispatch(cartActions.removeItem(id))
  }

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return (
    <div className='cart-sidebar-item-list'>
        <img src={img?.data?.attributes?.formats.large?.url} alt={name} width="70" height="70" loading="lazy" />
        <div className='cart-sidebar-item-list_info'>
            <h4>{name}</h4>
            <div className='price_and_quantity'>
              <h6>{quantity}x</h6>
              <span>${Number(price).toFixed(2)}</span>
            </div>
            <div className='cart-sidebar-quantity'>
              <span className='increase_btn' onClick={incrementItem}>
                  <AiOutlinePlus />
              </span>
              <span className='total_quantity'>{quantity}</span>
              <span className='decrease_btn' onClick={decrementItem}>
                  <AiOutlineMinus />
              </span>
            </div>
        </div>

        <div className='cart-sidebar-item-list-delete_btn' onClick={deleteItem}>
          <AiOutlineClose />
        </div>
    </div>
  )
}
export default CartSidebarItemList