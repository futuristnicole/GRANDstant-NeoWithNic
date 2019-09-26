import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PersonBox from './PersonBox';

class KokoGallery extends Component {
    render() {
        return (
            <div className="section-projects">
                <h1>People Component page</h1> 
                
                {/* <h2 className="section-headers">Starring</h2> <br /> <br /> */}
                    <div className="grid-3 wrap" >
                    <PersonBox  
                        roll="Randy Bobbs"  
                        name="Anthony Esposito"
                        />
                    <PersonBox  
                        roll="Jessica"  
                        name="Dulaney Sundin"
                        />
                    <PersonBox  
                        roll="Ralph"  
                        name="John Parsonson"
                        />
                    </div>
               
            </div>
        );
    }
};

export default KokoGallery;