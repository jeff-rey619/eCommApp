import React from "react";
import './Breadcrumbs.css';
import Arrow_icon from '../Assets/breadcrum_arrow.png'


function BreadCrumbs(props) {

    const product = props;

    return (
        <div className="breadcrumbs">
            HOME <img src={Arrow_icon} alt="" /> SHOP <img src={Arrow_icon} alt="" /> {product.product.category} <img src={Arrow_icon} alt="" /> {product.product.name}
        </div>
    )
}

export default BreadCrumbs