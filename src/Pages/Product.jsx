import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import {useParams} from 'react-router-dom'
import BreadCrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";


function Product() {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e)=>e.id === Number(productId) )
    return (
        <div className="product">
            <BreadCrumbs product={product} />
            <ProductDisplay product={product} />
        </div>
    )
}

export default Product