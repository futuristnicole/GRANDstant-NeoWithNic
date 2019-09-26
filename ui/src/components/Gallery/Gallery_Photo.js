import React, { Component } from 'react';


class Gallery_Photo extends Component {
    render() {
        return (
            <div className={`gallery__item--${this.props.size}`}>
                <img className="gallery__img" 
                    src={`../img/Gallery/${this.props.file}.jpg`} 
                    alt={`${this.props.alt}`} >
                </img>
             </div>
        )
    }
};

export default Gallery_Photo;

