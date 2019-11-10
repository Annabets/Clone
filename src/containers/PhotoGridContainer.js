import React from 'react';
import {connect} from 'react-redux';
import PhotoGrid from '../components/PhotoGrid';
import PropTypes from 'prop-types';

function PhotoGridContainer(props) {
    const {isHomePage,isSearchPage,searchCategory,photos,photoGrid} = props;
    return (
        <>
            <PhotoGrid
                isHomePage={isHomePage}
                isSearchPage={isSearchPage}
                searchCategory={searchCategory}
                photos={photos}
                columns={photoGrid.columns}
                isLoadingPhotos={photoGrid.isLoadingPhotos}
                modalPhoto={photoGrid.modalPhoto}
                isModalOpen={photoGrid.isModalOpen}
            />
        </>
    )
}

PhotoGridContainer.propTypes = {
    isHomePage: PropTypes.bool.isRequired,
    isSearchPage: PropTypes.bool.isRequired,
    searchCategory: PropTypes.string.isRequired,
    photos: PropTypes.object.isRequired
}

const mapStateToProps = store => {
    return {
        photoGrid: store.photoGrid
    }
}

export default connect(mapStateToProps)(PhotoGridContainer);