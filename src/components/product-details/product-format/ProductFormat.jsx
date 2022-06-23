import React, { useEffect, useState } from "react";
import "./ProductFormat.scss"
import swatchOneImg from "../../../images/Swatch 01.png"
import swatchTwoImg from "../../../images/Swatch 02.png"
import swatchThreeImg from "../../../images/Swatch 03.png"
import swatchFourImg from "../../../images/Swatch 04.png"

const ProductFormat = () => {

    let colorBoxStyle = [{
        background: "#0DA0BC",
        swatchImg: swatchOneImg
    },
    {
        background: "#D82578",
        swatchImg: swatchTwoImg
    },
    {
        background: "#333333",
        swatchImg: swatchThreeImg
    },
    {
        background: "#A5A5A5",
        swatchImg: swatchFourImg
    }];

    let [sizeFlag, setSizeFlag] = useState([{
        name: "XS",
        isSelect: false
    },
    {
        name: "S",
        isSelect: false
    },
    {
        name: "M",
        isSelect: false
    },
    {
        name: "L",
        isSelect: false
    },
    {
        name: "XL",
        isSelect: false
    }]);


    let [colorFlag, setColorFlag] = useState([false, false, false, false]);

    const updateColorFlag = (i) => {
        let colorFlagCopy = [...colorFlag];
        colorFlagCopy[i] = !colorFlagCopy[i];
        setColorFlag(colorFlagCopy)
    }

    const updatesizeFlag = (i) => {
        let sizeFlagCopy = [...sizeFlag];
        sizeFlagCopy[i].isSelect = !sizeFlagCopy[i].isSelect;
        setSizeFlag(sizeFlagCopy)
    }

    const sizeStyle = (i) => {
        if (sizeFlag[i].isSelect) {
            return {
                background: "#545D63",
                color: "var(--white)"
            }
        }
        else {
            return {
                background: "#FFFFFF",
                color: "#545D63"
            }
        }
    }

    return (
        <>
            <div className="format-section">
                <div className="color-format-section">
                    <div className="color-title-format-section">Color</div>
                    <div className="color-box-main-format-section">
                        {colorBoxStyle.map((o, i) => {
                            return (
                                <div className="color-box-format-section" id={colorFlag[i] ? "outline" : "none"} key={i} style={o} onClick={() => updateColorFlag(i)} >
                                    {colorFlag[i] ? <svg className="color-check-box" xmlns="http://www.w3.org/2000/svg" width="18.828" height="13.414" viewBox="0 0 18.828 13.414">
                                        <path id="check" d="M20,6,9,17,4,12" transform="translate(-2.586 -4.586)" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </svg> : ""}
                                    <img src={o.swatchImg} className="color-box-image-format-section" alt="img" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="size-format-section">
                    <div className="size-title-format-section">Size</div>
                    <div className="size-box-main-format-section">
                        {
                            sizeFlag.map((o, i) => {
                                return (
                                    <div key={i} className="size-box-format-section" style={sizeStyle(i)} onClick={() => updatesizeFlag(i)}>{o.name}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFormat