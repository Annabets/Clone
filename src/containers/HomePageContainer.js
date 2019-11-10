import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PhotoGridContainer from './PhotoGridContainer';

function HomePageContainer(props) {
    const {homePage} = props;
    return (
        <>
            <Navbar
                isHomePage={true}
                isOnTop={homePage.isOnTop}
            />
            <Hero
                photo={homePage.heroPhoto}
            />
            <PhotoGridContainer
                isHomePage={true}
                isSearchPage={false}
                searchCategory=''
                photos={homePage.curatedPhotos}
            />
        </>
    )
}

const mapStateToProps = store => {
    return {
        homePage: store.homePage
    }
}

export default connect(mapStateToProps)(HomePageContainer);