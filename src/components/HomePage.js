import React from 'react';
import Hero from './Hero';
import PhotoGrid from './PhotoGrid';

class HomePage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <>
                <Hero/>
                <PhotoGrid/>
            </>
        )
    }
}

export default HomePage;