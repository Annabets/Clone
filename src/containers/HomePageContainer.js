import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PhotoGridContainer from './PhotoGridContainer';
import {homePageActions} from "../actions/homePageActions";

function HomePageContainer(props) {
    const {homePage, setScrollFlag, getHeroPhoto, getTags, getCuratedPhotos} = props;
    let photos = [];
    homePage.curatedPhotos.forEach(page => {
        page.photos.forEach(photo => {
            photos.push(photo)
        })
    });
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
                photos={photos}
                getMorePhotos={getCuratedPhotos}
                isLoadingPhotos={homePage.isLoadingPhotos}
                isUploadFailed={homePage.isUploadFailed}
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
        getTags: () => dispatch(homePageActions.getTags()),
        getCuratedPhotos: () => dispatch(homePageActions.getCuratedPhotos())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePageContainer);