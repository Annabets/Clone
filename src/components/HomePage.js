import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import PhotoGrid from './PhotoGrid';

class HomePage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <>
                <Navbar/>
                <Hero/>
                <PhotoGrid/>
            </>
        )
    }
}

export default HomePage;