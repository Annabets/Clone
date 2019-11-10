import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import PhotoGridContainer from './PhotoGridContainer';

function SearchPageContainer(props) {
    return (
        <>
            <Navbar/>
            <PhotoGridContainer/>
        </>
    )
}

const mapStateToProps = store => {
    return {
        searchPage: store.searchPage
    }
}

export default connect(mapStateToProps)(SearchPageContainer);