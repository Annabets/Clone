import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import PhotoGrid from '../components/PhotoGrid';

function SearchPageContainer(props) {
    return (
        <>
            <Navbar/>
            <PhotoGrid/>
        </>
    )
}

const mapStateToProps = store => {
    return {
        searchPage: store.searchPage
    }
}

export default connect(mapStateToProps)(SearchPageContainer);