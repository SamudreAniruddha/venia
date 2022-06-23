import React from "react";
import { useSelector } from "react-redux";
import { getAllCatagory } from "../../../../state/products/catagory.slice";
import { Link } from "react-router-dom";

const Catagory = () => {
    const cat = useSelector(getAllCatagory); //get all catagories from store

    return (<>
        <div className="catagory-main">{
            cat.map((o, i) => {
                return <div className="catagory-items" key={i}><Link to={`/products/${o}`} style={{ textDecoration: 'none', color: '#1B252C' }}>{o}</Link></div>
            })
        }
        </div>
    </>)
}

export default Catagory;