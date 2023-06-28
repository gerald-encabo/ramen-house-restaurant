import { ProductCardProps, ProductDataType } from "@/types/listTypes";
import { cartActions } from "@/redux/cartSlice";
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "@/styles/productCard.scss";
import Button from "@/components/Button";

const ProductCard = ({data, id, prodCategory} : ProductCardProps) => {

    const dispatch = useDispatch()
    const { name, desc, price, img, altImg, category }: ProductDataType["attributes"] = data.attributes;

    // Add item into redux store
    const addToCart = () : void => {
        dispatch(cartActions.addItem({
            id,
            name,
            img,
            price,
            quantity: 1,
            totalPrice: price
        }))
    }

    return (
        <>
            {
                category.replace(/_/g, " ") === prodCategory
                ? (
                    <div className="product-card">
                        <div className="product-card-wrapper" >
                            <div className="product-card-img">
                                <LazyLoadImage
                                src={import.meta.env.VITE_RAMEN_HOUSE_APP_URL + img?.data?.attributes?.formats.large?.url} 
                                alt={altImg} 
                                effect="blur"
                                loading="lazy"
                                />                                   
                            </div>
                            <div className="product-card-info">
                                <h2 className="product-card-name">{name}</h2>
                                <p className="product-card-desc">{desc.substring(0,50)}...</p>
                                <p className="product-card-price">${price}</p>
                                <div onClick={addToCart}>
                                    <Button button="Add to Cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : " "
            }
        </>
    )
}
export default ProductCard