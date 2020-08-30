import React from 'react'

const GifGridItem = ({id,title,url}) => {
    console.log(id,title,url)
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title} height="200" width="280"/>
            <p>{title.toUpperCase()}</p>
        </div>
    )
}

export default GifGridItem
