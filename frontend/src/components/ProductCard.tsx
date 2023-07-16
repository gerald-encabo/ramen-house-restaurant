import { ProductCardProps, ProductDataType } from "@/types/listTypes";
import { cartActions } from "@/redux/cartSlice";
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "@/styles/productCard.scss";
import Button from "@/components/Button";
import { useState } from "react";
import ProductDetailsCard from "@/components/ProductDetailsCard";

const ProductCard = ({data, id, prodCategory} : ProductCardProps) => {

    const dispatch = useDispatch()
    const { name, desc, price, img, altImg, category }: ProductDataType["attributes"] = data.attributes;

    // Popup Product Details Card
    const [open, setOpen] = useState<boolean>(false);

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
                                    src={img?.data?.attributes?.formats.large?.url} 
                                    alt={altImg} 
                                    effect="blur"
                                    loading="lazy"
                                />                                   
                            </div>
                            <div className="product-card-info">
                                <h2 className="product-card-name">{name}</h2>
                                <p className="product-card-desc">{desc.substring(0,20)}...</p>
                                <p className="product-card-price">${price}</p>
                                <div onClick={addToCart}>
                                    <Button button="Add to Cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
            {
                open ? (
                    <ProductDetailsCard
                        data={data}
                        setOpen={setOpen} 
                        id={0}                    
                    />
                ) : null
            }
        </>
    )
}
export default ProductCard