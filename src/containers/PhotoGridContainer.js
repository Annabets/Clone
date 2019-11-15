import React from 'react';
import {connect} from 'react-redux';
import PhotoGrid from '../components/PhotoGrid';
import PropTypes from 'prop-types';
import {photoGridActions} from "../actions/photoGridActions";
import {homePageActions} from "../actions/homePageActions";

function PhotoGridContainer(props) {
    const {isHomePage,isSearchPage,searchCategory,photos,photoGrid,setColumns,setModalOpenFlag,setModalPhoto} = props;
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
                setColumns={setColumns}
                setModalOpenFlag={setModalOpenFlag}
                setModalPhoto={setModalPhoto}
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

const mapDispatchToProps = dispatch => {
    return {
        setColumns: colNum => dispatch(photoGridActions.setColumns(colNum)),
        setModalOpenFlag: flag => dispatch(photoGridActions.setModalOpenFlag(flag)),
        setModalPhoto: photo => dispatch(photoGridActions.setModalPhoto(photo))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PhotoGridContainer);