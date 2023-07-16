import { ProductCardProps, ProductDataType } from "@/types/listTypes";
import '@/styles/product-details-card.scss'
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/cartSlice";
import { FaTimes } from 'react-icons/fa';
import Button from "@/components/Button";

const ProductDetailsCard = ({data, setOpen}: ProductCardProps) => {

  const dispatch = useDispatch();
  const { img, name, price = 0 }: ProductDataType["attributes"] = data.attributes;
  const { id }: ProductDataType = data;

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
            <img src={img?.data?.attributes?.formats.large?.url} alt={data.attributes.altImg} />
          </div>
          <div className="tile-right-side">
            <p className="tile-title">{data.attributes.name}</p>
            <p className="tile-desc"><span>Ingredients:</span> {data.attributes.desc}</p>
            <p className="tile-category"><span>Category:</span> {data.attributes.category}</p>
            <p className="tile-price"><span>Price:</span> ${data.attributes.price}</p>
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