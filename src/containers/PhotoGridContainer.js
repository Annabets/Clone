import React from 'react';
import {connect} from 'react-redux';
import PhotoGrid from '../components/PhotoGrid';
import PropTypes from 'prop-types';
import {photoGridActions} from "../actions/photoGridActions";
import {homePageActions} from "../actions/homePageActions";

function PhotoGridContainer(props) {
    const {isHomePage,isSearchPage,searchCategory,photos,photoGrid,setColumns,setModalOpenFlag} = props;
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
        setModalOpenFlag: flag => dispatch(photoGridActions.setModalOpenFlag(flag))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PhotoGridContainer);