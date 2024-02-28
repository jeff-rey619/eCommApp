import React, { useContext } from "react";
import './ProductDisplay.css'
import start_icon from '../Assets/star_icon.png'
import start_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";


function ProductDisplay(props) {
    const { product } = props;
    const { addTocart } = useContext(ShopContext)
 
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product?.image} alt="" />
                    <img src={product?.image} alt="" />
                    <img src={product?.image} alt="" />
                    <img src={product?.image} alt="" />
                    
                </div>
                <div className="productdisplay-img">
                     <img className="productdisplay-main-img" src={product?.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>
                    {product?.name}
                </h1>
                <div className="productdisplay-right-star">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
${product?.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                   ${product?.new_price}     
                    </div>
                </div>
                <div className="productdisplay-right-description">
                Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                         <div>XL</div>
                        <div>XXL</div>
                        
                    </div>
                </div>
                <button onClick={() => {
                    addTocart(product.id)
                }}>Add to cart</button>
                <p className="productdisplay-right-category">
                    <span>Category :</span> Women , T-shirt , crop top
                 
                </p>
                <p className="productdisplay-right-category">
                   <span>Tags :</span> Modern , Latest
                </p>
                   
            </div>
        </div>
    )
}

export default ProductDisplay