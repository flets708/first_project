import React from "react";
import './Title.css'

export function Title(props) {
    return (
        <div className="titleSection">
            <h2 style={props.titleStyle} id="versionStatement">{props.children}</h2>
            
        </div>
    )
}
