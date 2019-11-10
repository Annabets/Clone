import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import PhotoGridContainer from './PhotoGridContainer';

function SearchPageContainer(props) {
    const {searchPage} = props;
    return (
        <>
            <Navbar
                isHomePage={false}
            />
            <PhotoGridContainer
                isHomePage={false}
                isSearchPage={true}
                searchCategory={searchPage.searchCategory}
                photos={searchPage.searchPhotos}
            />
        </>
    )
}

const mapStateToProps = store => {
    return {
        searchPage: store.searchPage
    }
}

export default connect(mapStateToProps)(SearchPageContainer);