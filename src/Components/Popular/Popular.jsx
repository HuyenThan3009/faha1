import React from "react";
import './Popular.css'
import data_product from '../Assets/data'

const Popular = () =>{
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item)=>{
                        return(
                            <div className="popular-item" key={item.id}>
                            <p > {item.name}</p>
                            {item.category}
                            <img src={item.image} alt="" />
                            <p>{item.new_price}</p>
                            <p>{item.old_price}</p>
                            </div>
                        )

                    })}
            </div>
        </div>
    )
}

export default Popular