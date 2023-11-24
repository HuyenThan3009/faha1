import React from "react";
import './NewCollections.css'
import new_collection from '../Assets/new_collections'

const NewCollections = () =>{
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item)=>{
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

export default NewCollections