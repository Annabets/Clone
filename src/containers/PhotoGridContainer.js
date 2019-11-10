import React from 'react';
import {connect} from 'react-redux';
import PhotoGrid from '../components/PhotoGrid';

function PhotoGridContainer(props) {
    return (
        <>
            <PhotoGrid/>
        </>
    )
}

const mapStateToProps = store => {
    return {
        photoGrid: store.photoGrid
    }
}

export default connect(mapStateToProps)(PhotoGridContainer);