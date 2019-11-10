import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PhotoGridContainer from './PhotoGridContainer';

function HomePageContainer(props) {
    return (
        <>
            <Navbar/>
            <Hero/>
            <PhotoGridContainer/>
        </>
    )
}

const mapStateToProps = store => {
    return {
        homePage: store.homePage
    }
}

export default connect(mapStateToProps)(HomePageContainer);