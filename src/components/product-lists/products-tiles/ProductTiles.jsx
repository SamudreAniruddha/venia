import React from "react";
import "./ProductTiles.scss"
import slidersSVG from "../../../images/svg/sliders.svg";
import arrowDownSVG from "../../../images/svg/arrow-down.svg";
import arrowUpSVG from "../../../images/svg/arrow-up.svg";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleFilter } from "../../../state/features/filter.slice";
import { recentAction } from "../../../state/features/recent.slice";


//used Material tooltip for display of product title
const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[5],
        fontSize: 15,
    },
}));


const ProductTiles = (props) => {

    const dispatch = useDispatch();

    // method to iteration of product list to render UI tiles
    const renderProductData = (pData) => {
        return pData.map(o => {
            return (
                <div className="tiles" key={o.id}>
                    <Link style={{ textDecoration: 'none' }} to={`/productId/${o.id}`} onClick={() => dispatchRecentView(o)}>
                        <div className="main-product-image-div">
                            <img src={o.image} className="product-image" alt={o.image} />
                        </div>
                    </Link>
                    <div>
                        <LightTooltip title={o.title}>
                            <Link style={{ textDecoration: 'none', color: "#1B252C" }} to={`/productId/${o.id}`} onClick={() => dispatchRecentView(o)}><div className="product-title">{o.title.slice(0, 20)}...</div></Link>
                        </LightTooltip>
                        <div className="product-price">$ {o.price}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232" className="product-fav-icon" onClick={(ev) => {
                            document.querySelector(`#heart-${o.id}`).style.fill = (document.querySelector(`#heart-${o.id}`).style.fill === 'rgb(27, 37, 44)') ? 'white' : 'rgb(27, 37, 44)';
                        }} >
                            <path className="product-fav-icon-path" id={`heart-${o.id}`} d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z" transform="translate(-0.549 -1.998)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            )
        })
    }

    const toggleFilterMethod = () => {
        dispatch(toggleFilter(true)); //state manage of filter menu toggle
    }

    const dispatchRecentView = (singleProduct) =>{
        dispatch(recentAction(singleProduct));//dispached single product to action recent view
    }

    return (<>
        <div className="action-button">
            <div className="filter-result" onClick={toggleFilterMethod}><img src={slidersSVG} className='icon-sliders' alt="Icon sliders" /> Filter Results</div>
            <div className="sort-products">
                <img src={arrowDownSVG} className='icon-arrow-down' alt="Icon arrow down" />
                <img src={arrowUpSVG} className='icon-arrow-up' alt="Icon arrow up" />
                Sort Products
            </div>
            <div className="count-result">{props.productDataLength} Results</div>

            <select className="sort-dropdown">
                <option value="Sort by Latest">Sort by Latest</option>
            </select>

        </div>
        <div className="main-tiles">{renderProductData(props.productData)}</div>
    </>)

}

export default ProductTiles