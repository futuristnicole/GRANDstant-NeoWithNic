import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import GalleryPhoto from './AllPictures';

class KokoGallery extends Component {
    render() {
        return (
            <div className="section-projects">
                <h1>Gallery Component page</h1> 
                <p>This component is made using static data that is not coming from a database. However, it can be made using GRANDstack. </p>
                <p>To see how to build each part see.</p>
                <p>See how to get the look with <Link to="/tutorials/scss/gallery" className="">SCSS</Link></p>
                <p>See how to build the <Link to="/tutorials/scss/gallery" className="">react Component</Link></p>
                <section className="gallery center">
                    <GalleryPhoto />
                </section>
            </div>
        );
    }
};

export default KokoGallery;