import React from "react";

const Link = ({children, linkRef}) =>{
    return(
        <a
            href={linkRef}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    )
}

export default Link