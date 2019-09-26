import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import GalleryPhoto from './Gallery_Photo';
import Photos from '../../../queries/Photos';

class AllPictures extends Component {
    renderAllPictures() {
        return this.props.data.Photo.map( photo => {
            return(
                <div key={photo.id} className={`center gallery__item--${photo.size}`}>  
                {/* {photo.location} */}
                    <GalleryPhoto 
                        id={photo.id}
                        file={photo.file}
                        alt={photo.alt} 
                        location={photo.location} 
                        size={photo.size} 
                    />
                </div>
            )
        });
    }
    
    render() {
        console.log(this.props);
        if (this.props.data.loading) { return <div>Loading...</div>; } 
        return (
            
            <section className="gallery center">
                {this.renderAllPictures()}

            </section>
        );
    }
}

export default graphql(Photos)(AllPictures);