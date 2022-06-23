import React from "react";
import { useSelector } from "react-redux";
import { getRecentView } from "../../../state/features/recent.slice";
import { Link } from "react-router-dom";
import "./RecentView.scss";

const RecentView = () => {

    let viewArr = useSelector(getRecentView);
    return (<>{viewArr.length !== 0 ?
        <div className="main-recent-view">
            <div className="title-recent-view">Recently Viewed</div>
            <div className="section-recent-view">
                {
                    viewArr.map((o, i) => {
                        return (
                            <div key={i} className="content-recent-view-outter">
                                <Link style={{ textDecoration: 'none' }} to={`/productId/${o.id}`}>
                                    <div className="content-recent-view-inner-image">
                                        <img src={o.image} className="image-recent-view" alt="recent-view" />
                                    </div>
                                </Link>

                                <Link style={{ textDecoration: 'none', color: "#1B252C" }} to={`/productId/${o.id}`} >
                                    <div className="content-recent-view-inner-title">
                                        {o.title}
                                    </div>
                                </Link>
                                <div className="content-recent-view-inner-title">
                                    $ {o.price}
                                </div>
                            </div>)
                    })
                }

            </div>

        </div> : ""}
    </>)

}

export default RecentView