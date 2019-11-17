import React from 'react';
import {connect} from 'react-redux';
import PhotoGrid from '../components/PhotoGrid';
import PropTypes from 'prop-types';
import {photoGridActions} from "../actions/photoGridActions";

function PhotoGridContainer(props) {
    const {
        isHomePage,
        isSearchPage,
        searchQuery,
        pages,
        photoGrid,
        setColumns,
        setModalOpenFlag,
        setModalPhoto,
        getMorePhotos,
        isLoadingPhotos,
        isUploadFailed,
        likePhoto,
        likeModalPhoto
    } = props;
    let photos = [];
    pages.forEach(page => {
        page.photos.forEach(photo => {
            photos.push(photo)
        })
    });
    return (
        <>
            <PhotoGrid
                isHomePage={isHomePage}
                isSearchPage={isSearchPage}
                searchQuery={searchQuery}
                photos={photos}
                getMorePhotos={getMorePhotos}
                columns={photoGrid.columns}
                isLoadingPhotos={isLoadingPhotos}
                isUploadFailed={isUploadFailed}
                modalPhoto={photoGrid.modalPhoto}
                isModalOpen={photoGrid.isModalOpen}
                setColumns={setColumns}
                setModalOpenFlag={setModalOpenFlag}
                setModalPhoto={setModalPhoto}
                likePhoto={likePhoto}
                likeModalPhoto={likeModalPhoto}
            />
        </>
    )
}

PhotoGridContainer.propTypes = {
    isHomePage: PropTypes.bool.isRequired,
    isSearchPage: PropTypes.bool.isRequired,
    searchQuery: PropTypes.string,
    pages: PropTypes.array.isRequired,
    getMorePhotos: PropTypes.func.isRequired,
    isLoadingPhotos: PropTypes.bool.isRequired,
    isUploadFailed: PropTypes.bool.isRequired,
    likePhoto: PropTypes.func.isRequired
}

const mapStateToProps = store => {
    return {
        photoGrid: store.photoGrid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setColumns: colNum => dispatch(photoGridActions.setColumns(colNum)),
        setModalOpenFlag: flag => dispatch(photoGridActions.setModalOpenFlag(flag)),
        setModalPhoto: photo => dispatch(photoGridActions.setModalPhoto(photo)),
        likeModalPhoto: () => dispatch(photoGridActions.toggleModalPhotoLike())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PhotoGridContainer);