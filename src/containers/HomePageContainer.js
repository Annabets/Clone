import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PhotoGridContainer from './PhotoGridContainer';
import {homePageActions} from "../actions/homePageActions";

function HomePageContainer(props) {
    const {homePage,setScrollFlag} = props;
    return (
        <>
            <Navbar
                isHomePage={true}
                isOnTop={homePage.isOnTop}
                setScrollFlag={setScrollFlag}
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

const mapDispatchToProps = dispatch => {
    return {
        setScrollFlag: value => dispatch(homePageActions.setScrollFlag(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePageContainer);