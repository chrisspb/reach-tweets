import React from 'react'

function Child(props) {
    return (
        <div className="card py-2 mb-1 mx-2 pt-1">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.date} seconds ago</p>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Child;