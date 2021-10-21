import React, { useState } from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";

function Loading(props) {
    let [loading] = useState(true);
    let [color] = useState("#ffffff");

    return (
        <div className="loading d-flex justify-content-center align-items-center mr-5 py-2">
            <div className="sweet-loading">
                <PacmanLoader color={color} loading={loading} size={50} />
            </div>
        </div>
    )
}

export default Loading;