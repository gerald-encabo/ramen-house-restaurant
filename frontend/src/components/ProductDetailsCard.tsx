import { ProductCardProps, ProductDataType } from "@/types/TypeLists";
import '@/styles/product-details-card.scss'
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/CartSlice";
import { FaTimes } from 'react-icons/fa';
import Button from "@/components/Button";

const ProductDetailsCard = ({data, setOpen}: ProductCardProps) => {

  const dispatch = useDispatch();
  const { id, img, name, price = 0 } = data as ProductDataType;

  // Add item into redux store
  const addToCart = (): void => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        img,
        price,
        quantity: 1,
        totalPrice: price,
      })
    );
  };
  
  return (
    <div className="product-detail-card" onClick={ () => setOpen?.(!open) }>
      {
        <div className="details-card-tile">
          <div className="close-btn" onClick={ () => setOpen?.(!open) }>
            <FaTimes />
          </div>
          <div className="tile-left-side">
            <img src={data.img} alt={data.alt} />
          </div>
          <div className="tile-right-side">
            <p className="tile-title">{data.name}</p>
            <p className="tile-desc"><span>Ingredients:</span> {data.desc}</p>
            <p className="tile-category"><span>Category:</span> {data.category}</p>
            <p className="tile-price"><span>Price:</span> ${data.price}</p>
            <div onClick={addToCart}>
                <Button button="Add to Cart" />
              </div>
          </div>
        </div>
      }
    </div>
  )
}
export default ProductDetailsCard