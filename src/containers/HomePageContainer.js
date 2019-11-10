import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PhotoGrid from '../components/PhotoGrid';

function HomePageContainer(props) {
    return (
        <>
            <Navbar/>
            <Hero/>
            <PhotoGrid/>
        </>
    )
}

const mapStateToProps = store => {
    return {
        homePage: store.homePage
    }
}

export default connect(mapStateToProps)(HomePageContainer);