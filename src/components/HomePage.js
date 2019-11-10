import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import PhotoGrid from './PhotoGrid';

function HomePage(props) {
    return (
        <>
            <Navbar/>
            <Hero/>
            <PhotoGrid/>
        </>
    )
}

export default HomePage;