import React from 'react';
import "./shared.css";

function TrendingProducts() {
    return (
        <div>
            <div className="container-trending">
                <div className="images">
                    <img src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg" alt='trending' />
                </div>
                <div className="product">
                    <p>Women's Running Shoe</p>
                    <h1>Nike Epic React Flyknit</h1>
                    <h2>$150</h2>
                    <p className="desc">The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
                    <div className="buttons">
                    <button className="add">Add to Cart</button>
                    <button className="like"><span>♥</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts;