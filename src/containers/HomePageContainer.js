import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PhotoGridContainer from './PhotoGridContainer';
import {homePageActions} from "../actions/homePageActions";

function HomePageContainer(props) {
    const {homePage,setScrollFlag,getHeroPhoto,getTags} = props;
    return (
        <>
            <Navbar
                isHomePage={true}
                isOnTop={homePage.isOnTop}
                setScrollFlag={setScrollFlag}
            />
            <Hero
                tags={homePage.tags}
                getTags={getTags}
                photo={homePage.heroPhoto}
                getHeroPhoto={getHeroPhoto}
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
        setScrollFlag: value => dispatch(homePageActions.setScrollFlag(value)),
        getHeroPhoto: () => dispatch(homePageActions.getHeroPhoto()),
        getTags: () => dispatch(homePageActions.getTags())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePageContainer);