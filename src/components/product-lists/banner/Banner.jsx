import React from "react";
import "./Banner.scss";
import { useParams } from "react-router-dom";
import electronicsImg from "../../../images/electronics.jpg";
import jeweleryImg from "../../../images/all.jpg";
import menImg from "../../../images/all.jpg";
import womenImg from "../../../images/all.jpg";
import AllImg from "../../../images/all.jpg";

const Banner = () => {

    let { ele } = useParams(); //fetch current ele from path
    const caseCond = (catEle) => {

        //switch case for change of banner image and title on base of catagory select
        switch (catEle) {
            case 'All':
                return <div className="rear-image">
                    <img src={AllImg} className='banner-rear-img' alt="img-women" />
                    <div className="front-image">
                        <div className="front-image-text">Online<br /> Shop</div>
                        <div className="front-image-section-ender"></div>
                    </div>
                </div>;

            case 'Women':
                return <div className="rear-image">
                    <img src={womenImg} className='banner-rear-img' alt="img-women" />
                    <div className="front-image">
                        <div className="front-image-text">Women</div>
                        <div className="front-image-section-ender"></div>
                    </div>
                </div>;

            case 'Men':
                return <div className="rear-image">
                    <img src={menImg} className='banner-rear-img' alt="img-women" />
                    <div className="front-image">
                        <div className="front-image-text">Men</div>
                        <div className="front-image-section-ender"></div>
                    </div>
                </div>;

            case 'Jewelery':
                return <div className="rear-image">
                    <img src={jeweleryImg} className='banner-rear-img' alt="img-women" />
                    <div className="front-image">
                        <div className="front-image-text">Jewelery</div>
                        <div className="front-image-section-ender"></div>
                    </div>
                </div>;

            case 'Electronics':
                return <div className="rear-image">
                    <img src={electronicsImg} className='banner-rear-img' alt="img-women" />
                    <div className="front-image">
                        <div className="front-image-text">Electronic<br /></div>
                        <div className="front-image-section-ender"></div>
                    </div>
                </div>;

            default:
                return null;

        }
    }

    return (<>
        <section className="banner-section">
            {caseCond(ele)}
        </section>
    </>)

}

export default Banner