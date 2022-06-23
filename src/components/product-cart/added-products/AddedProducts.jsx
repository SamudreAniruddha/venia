import React, { useEffect, useState } from "react";
import "./AddedProducts.scss";
import removeImg from "../../../images/svg/trash-2.svg";
import editImg from "../../../images/svg/edit-2.svg";
import saveImg from "../../../images/svg/heart-1.svg";

const AddedProducts = (props) => {

    let [cartList, setCartList] = useState(JSON.parse(JSON.stringify(props.cartLits)));

    useEffect(() => {
        setCartList(JSON.parse(JSON.stringify(props.cartLits)));
    }, [props.cartLits])

    const changeQtyFun = (val, i, obj) => {
        if (val >= 1 && !val.includes(".")) {
            let list = [...cartList];
            list[i].quantity = Number(val);
            setCartList(list);
            props.updateCart(obj, true, list[i].quantity);
        }
    }

    return (
        <>
            {
                cartList.map((o, i) => {
                    return (
                        <div key={o.id} className="main-addded-product">
                            <div className="image-addded-product-outter">
                                <img src={o.image} className="image-addded-product-inner" alt="" />
                            </div>
                            <div className="detail-addded-product-outter">
                                <div className="detail-addded-product-title">{o.title.slice(0, 20)}</div>
                                <div className="detail-addded-product-size">Size : Medium</div>
                                <div className="detail-addded-product-color">Color : Storm</div>
                                <div className="detail-addded-product-price">${o.price}</div>
                            </div>
                            <div className="delete-addded-product-outter">
                                <img src={removeImg} className="icon-remove" alt="icon remove" onClick={() => props.updateCart(o, false, 1)} />
                            </div>
                            <div className="add-more-cart-outter">
                                <div className="remove-product-inner">
                                    <svg className="svg-remove-product-inner" xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 22" onClick={() => o.quantity > 1 ? changeQtyFun(String(o.quantity - 1), i, o) : false} >
                                        <g id="minus-circle" transform="translate(-1 -1)">
                                            <circle id="Ellipse_134" dataname="Ellipse 134" cx="10" cy="10" r="10" transform="translate(2 2)" fill={o.quantity > 1 ? "none" : "#EAEBEB"} stroke="#91959C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                            <line id="Line_520" dataname="Line 520" x2="8" transform="translate(8 12)" fill="none" stroke="#91959C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="input-product-inner">
                                    <input type="number" id="qty" name="quantity" value={o.quantity} onChange={(ev) => changeQtyFun(ev.target.value, i, o)} />
                                </div>
                                <div className="add-product-inner">
                                    <svg className="svg-add-product-inner" xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 22" onClick={() => changeQtyFun(String(o.quantity + 1), i, o)}>
                                        <g id="plus-circle" transform="translate(-1 -1)">
                                            <circle id="Ellipse_148" dataname="Ellipse 148" cx="10" cy="10" r="10" transform="translate(2 2)" fill="none" stroke="#91959C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                            <line id="Line_537" dataname="Line 537" y2="8" transform="translate(12 8)" fill="none" stroke="#91959C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                            <line id="Line_538" dataname="Line 538" x2="8" transform="translate(8 12)" fill="none" stroke="#91959C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="actions-addded-product-outter">
                                <div className="edit-action">
                                    <img src={editImg} className="icon-edit" alt="icon edit" />
                                    <div className="edit-action-text">Edit Item</div>
                                </div>
                                <div className="remove-action">
                                    <img src={removeImg} className="icon-remove" alt="icon remove" onClick={() => props.updateCart(o, false, 1)} />
                                    <div className="remove-action-text">Remove</div>
                                </div>
                                <div className="save-for-later-action">
                                    <img src={saveImg} className="icon-save" alt="icon save" />
                                    <div className="save-action-text">Save for later</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AddedProducts