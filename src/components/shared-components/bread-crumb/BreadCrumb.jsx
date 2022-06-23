import React from "react";
import "./BreadCrumb.scss"
const BreadCrumb = (props) => {

    return (<>
        <div className="main-crumb">{props.breadcrumbData}</div>
    </>)

}

export default BreadCrumb