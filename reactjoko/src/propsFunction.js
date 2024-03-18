import React from "react";

function Product({ price, name, discount = 0 }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>
                <s>Rp. {price}</s> ({discount}%) {/* Harga coret/diskon */}
            </p>
            <p>
                <b>Rp {parseInt(price) - parseInt(price) * parseInt(discount) / 100}</b>{/* Harga setelah coret/diskon */}
            </p>
            <hr />{/* garis */}
        </div>
    );
}

export default Product;
