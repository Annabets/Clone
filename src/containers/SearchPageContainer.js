import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import PhotoGridContainer from './PhotoGridContainer';
import {useLocation} from 'react-router-dom';
import {searchPageActions} from "../actions/searchPageActions";

function SearchPageContainer(props) {
    const {searchPage, getSearchPhotos} = props;
    const query = new URLSearchParams(useLocation().search).get("query");
    if(!query)
        window.location.replace('/');
    else
        return (
            <>
                <Navbar
                    isHomePage={false}
                />
                <PhotoGridContainer
                    isHomePage={false}
                    isSearchPage={true}
                    searchQuery={query}
                    pages={searchPage.searchPhotos}
                    getMorePhotos={getSearchPhotos}
                    isLoadingPhotos={searchPage.isLoadingPhotos}
                    isUploadFailed={searchPage.isUploadFailed}
                />
            </>
        )
}

const mapStateToProps = store => {
    return {
        searchPage: store.searchPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSearchPhotos: query => dispatch(searchPageActions.getSearchPhotos(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer);