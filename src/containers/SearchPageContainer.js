import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import PhotoGridContainer from './PhotoGridContainer';
import {useLocation} from 'react-router-dom';

function SearchPageContainer(props) {
    const {searchPage} = props;
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
                photos={searchPage.searchPhotos}
                getMorePhotos={()=>{}}
                isLoadingPhotos={false}
                isUploadFailed={false}
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