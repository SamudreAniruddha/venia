import React, { useState } from "react";
import "./SideBarOption.scss";
import xSVG from '../../../images/svg/x.svg';
import { useDispatch, useSelector } from "react-redux";
import { addfilterData, clearAllfilterData, getFilterArray, removefilterData, toggleFilter } from "../../../state/features/filter.slice";
import squareImg from "../../../images/svg/square.svg";
import checkSquareImg from "../../../images/svg/check-square.svg";

const SideBarOption = () => {

    //dummy data for color style select UI check box
    const colorTilesArr = [
        {
            "background": "#000000",
            "filterColor": "Black"
        },
        {
            "border": "1px solid black",
            "background": "#FFFFFF",
            "filterColor": "White"
        },
        {
            "background": "#2D9D78",
            "filterColor": "Lochinvar"
        },
        {
            "background": "#FDBA5E",
            "filterColor": "Koromiko"
        },
        {
            "background": "#336DFF",
            "filterColor": "Dodger Blue"
        },
        {
            "background": "#E34850",
            "filterColor": "Mandy"
        },
        {
            "background": "#6408D3",
            "filterColor": "Electric Violet"
        },
        {
            "background": "#F9009A",
            "filterColor": "Hollywood Cerise"
        },
        {
            "background": "#EB7327",
            "filterColor": "Tango"
        },
        {
            "background": "transparent linear-gradient(180deg, #AF52FF 0%, #7950E8 16%, #4F5ADA 29%, #57CB76 43%, #EBC250 56%, #FF8810 69%, #E32F0F 83%, #BF1919 100%)",
            "filterColor": "Linear Gradient"
        },
    ]

    //dummy data for filter option check box
    const [listOfItems, setListOfItems] = useState([
        { id: 101, name: 'X-Small', isChecked: false, section: "Size" },
        { id: 102, name: 'Small', isChecked: false, section: "Size" },
        { id: 103, name: 'Medium', isChecked: false, section: "Size" },
        { id: 104, name: 'Large', isChecked: false, section: "Size" },
        { id: 105, name: 'X-Large', isChecked: false, section: "Size" },
        { id: 106, name: 'Outdoor', isChecked: false, section: "Style" },
        { id: 107, name: 'Casual', isChecked: false, section: "Style" },
        { id: 108, name: 'Athleisure', isChecked: false, section: "Style" },
        { id: 109, name: 'Running', isChecked: false, section: "Style" },
        { id: 110, name: 'Active', isChecked: false, section: "Style" },
        { id: 111, name: 'Calvin Klein', isChecked: false, section: "Brand" },
        { id: 112, name: 'Dolce & Gabbana', isChecked: false, section: "Brand" },
        { id: 113, name: 'Miu Miu', isChecked: false, section: "Brand" },
        { id: 114, name: 'Prada', isChecked: false, section: "Brand" },
        { id: 115, name: 'Rag & Bone', isChecked: false, section: "Brand" },
        { id: 116, name: 'Gucci', isChecked: false, section: "Brand" },
        { id: 117, name: 'Chanel', isChecked: false, section: "Brand" },
        { id: 118, name: 'Salvatore Ferragamo', isChecked: false, section: "Brand" },
        { id: 119, name: 'Marni', isChecked: false, section: "Brand" },
        { id: 120, name: 'Dior', isChecked: false, section: "Brand" },
    ]);

    const dispatch = useDispatch();

    const toggleFilterMethod = () => {
        dispatch(toggleFilter(false)); //state manage of filter menu toggle
    }

    const removeSelectedData = (par) => {
        //to make checkbox untick changing all the value of isChecked from dummy data
        setListOfItems(listOfItems.map(o => {
            o.isChecked = o.name === par ? false : o.isChecked;
            return o
        }));

        dispatch(removefilterData(par)) // state manage of filter to remove data
    }

    const addSelectedData = (par) => {
        if (!getAllSelected.includes(par)) { // condition to check duplicate data insertion
            dispatch(addfilterData(par)); // state manage of filter to add data 
        }
        else{
            removeSelectedData(par);
        }
    }

    const clearAllSelectedData = () => {
        //to make checkbox untick changing all the value of isChecked from dummy data
        setListOfItems(listOfItems.map(o => {
            o.isChecked = o.isChecked ? false : o.isChecked;
            return o
        }));

        dispatch(clearAllfilterData()) // state manage of filter to removeAll / clearAll data
    }

    //method calls on change of checkbox to update filter array state and dummy data 
    const updateListOfItems = (itemIndex, newsChecked) => {
        const updatedListOfItems = [...listOfItems];
        updatedListOfItems[itemIndex].isChecked = newsChecked;
        setListOfItems(updatedListOfItems);
        updatedListOfItems[itemIndex].isChecked ?
            addSelectedData(updatedListOfItems[itemIndex].name) :
            removeSelectedData(updatedListOfItems[itemIndex].name);
    }

    let getAllSelected = useSelector(getFilterArray); //to get data from store

    return (<>
        <div className="main-filter">

            <div className="filter-title-section">
                <div className="filter-title-label">Filters</div>
                <div className="filter-close">
                    <img src={xSVG} className='icon-x' alt="Icon x" onClick={toggleFilterMethod} />
                </div>
            </div>

            <div className="filter-tag-section">
                {getAllSelected.map((o, i) => {
                    return (<div className="filter-tag-dynamic" key={i}>
                        <div className="filter-tag-delete">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14.828" viewBox="0 0 14.828 14.828" style={{cursor:"pointer"}} onClick={() => removeSelectedData(o)}>
                                <g id="x" transform="translate(-4.586 -4.586)">
                                    <line id="Line_624" dataname="Line 624" x1="12" y2="12" transform="translate(6 6)" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    <line id="Line_625" dataname="Line 625" x2="12" y2="12" transform="translate(6 6)" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </g>
                            </svg>
                        </div>
                        <div className="filter-tag-select">{o}</div>
                    </div>)
                })}
                {getAllSelected.length !== 0 ? <div className="filter-tag-clear-all" onClick={() => clearAllSelectedData()}>Clear all</div> : ""}
            </div>

            <hr className="hr-divider" />

            <div className="filter-title">Color</div>
            <div className="color-section">
                {colorTilesArr.map((o, i) => {
                    return (
                        <div className="color-tiles" style={o} key={i} onClick={() => addSelectedData(o.filterColor)}>
                            {
                                getAllSelected.includes(o.filterColor) ? <svg xmlns="http://www.w3.org/2000/svg" width="18.828" height="13.414" viewBox="0 0 18.828 13.414">
                                    <path id="check" d="M20,6,9,17,4,12" transform="translate(-2.586 -4.586)" fill="none" stroke={o.filterColor === "White" ? "#000000" : "#ffffff"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg> : ""
                            }
                        </div>
                    )
                })}
            </div>

            <hr className="hr-divider" />

            <div className="filter-title">Size</div>
            <div className="size-section">
                {
                    listOfItems.map((o, i) => {
                        if (o.section === 'Size')
                            return (
                                <label key={o.id} >{o.isChecked ?
                                    <img src={checkSquareImg} className="check-box" alt="square-icon" onClick={() => updateListOfItems(i, !o.isChecked)} /> :
                                    <img src={squareImg} className="check-box" alt="square-icon" onClick={() => updateListOfItems(i, !o.isChecked)} />} {o.name}
                                </label>
                            )
                    })

                }
            </div>

            <hr className="hr-divider" />

            <div className="filter-title">Style</div>
            <div className="style-section">
                {
                    listOfItems.map((o, i) => {
                        if (o.section === 'Style')
                            return (
                                <label key={o.id} >{o.isChecked ?
                                    <img src={checkSquareImg} className="check-box" alt="square-icon" onClick={() => updateListOfItems(i, !o.isChecked)} /> :
                                    <img src={squareImg} className="check-box" alt="square-icon" onClick={() => updateListOfItems(i, !o.isChecked)} />} {o.name}
                                </label>
                            )
                    })

                }
            </div>

            <hr className="hr-divider" />

            <div className="filter-title">Brand</div>
            <div className="brand-section">
                {
                    listOfItems.map((o, i) => {
                        if (o.section === 'Brand')
                            return (
                                <label key={o.id} >{o.isChecked ?
                                    <img src={checkSquareImg} className="check-box" alt="square-icon" onClick={() => updateListOfItems(i, !o.isChecked)} /> :
                                    <img src={squareImg} className="check-box" alt="square-icon" onClick={() => updateListOfItems(i, !o.isChecked)} />} {o.name}
                                </label>
                            )
                    })

                }
            </div>

            <div className="show-more-section">Show more</div>
            <hr className="hr-divider" id="hr-last-tag" />
        </div>
    </>)

}

export default SideBarOption