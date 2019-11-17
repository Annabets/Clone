import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import notLikedBtn from '../assets/icons/n-active-like-btn.svg';
import likedBtn from '../assets/icons/active-like-btn.svg';
import {BallPulse} from "react-pure-loaders";

class PhotoGrid extends React.Component {
    constructor(props){
        super(props)
        props.getMorePhotos();
        this.handleResize();
    }

    renderColumn=(colNum,colLen)=>{
        const {photos} = this.props;
        let columnPhotos = photos.filter((item, index) => {
            return (index % colLen === colNum)
        })
        return columnPhotos.map((photo)=>{
            return(
                <div className="Column-item" key={photo.id} id={photo.id} onClick={this.handleGridItemClicked}>
                    <img className="Column-item-img" src={`${photo.src.large}`} alt=""/>
                    <div className="Column-item-content">
                        <a href={`${photo.photographer_url}`} target="_blank">
                            {`${photo.photographer}`}
                        </a>
                        <button className="transparent-btn">
                            {photo.liked || <img src={notLikedBtn} width="24" height="24" alt=""/>}
                            {photo.liked && <img src={likedBtn} width="24" height="24" alt=""/>}
                        </button>
                    </div>
                </div>
            )
        })
    }

    renderContainerColumns = (columns)=>{
        return columns.map((item,index)=>{
            return(
                <div key={index} className="Grid-column">{this.renderColumn(index,columns.length)}</div>
            )
        })
    }

    handleGridItemClicked = (e)=>{
        const {setModalOpenFlag, setModalPhoto, photos} = this.props;
        if(e.target.className === "Column-item-content" || e.target.className === "Column-item-img"){
            setModalPhoto(photos.find((photo)=>{return photo.id === Number(e.currentTarget.id)}));
            setModalOpenFlag(true);
        }
    }

    handleResize = ()=>{
        const {columns,setColumns} = this.props;
        const colNum = columns.length;
        const width = window.innerWidth;
        if(width < 625 && colNum!==1)
            setColumns(1)
        else if(width > 625 && width < 1000 && colNum!==2)
            setColumns(2)
        else if(width > 1000 && width < 1500 && colNum!==3)
            setColumns(3)
        else if(width > 1500 && colNum!==4)
            setColumns(4)
    }

    handleScroll = ()=>{
        const {isLoadingPhotos, getMorePhotos, isUploadFailed} = this.props;
        if (((window.innerHeight * 2 + window.scrollY) >= document.body.scrollHeight) && !isLoadingPhotos && !isUploadFailed) {
            getMorePhotos();
        }
    }

    componentDidMount = ()=>{
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount= ()=>{
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        const {
            columns,
            isHomePage,
            isSearchPage,
            photos,
            isLoadingPhotos,
            isUploadFailed,
            isModalOpen,
            modalPhoto,
            setModalOpenFlag,
            searchQuery
        } = this.props;
        return(
            <>
                <section className="Photo-grid" style={isSearchPage ? {top: '57px'} : {top: '0'}}>
                    <div className="Photo-grid-title">
                        {isHomePage && <h2>{'Free Stock Photos'}</h2>}
                        {isSearchPage && <h1>{`${searchQuery} Photos`}</h1>}
                    </div>
                    {photos.length > 0 &&
                    <div className="Grid-container">
                        {this.renderContainerColumns(columns)}
                    </div>}
                    {isLoadingPhotos &&
                    <div className="Loading-indicator">
                        <BallPulse
                            color={'#1a1a1a'}
                            loading={true}
                        />
                    </div>}
                    {isUploadFailed && <h3>Failed to upload photos</h3>}
                </section>
                {isModalOpen &&
                <Modal
                    modalPhoto={modalPhoto}
                    setModalOpenFlag={setModalOpenFlag}
                />}
            </>
        )
    }
}

PhotoGrid.propTypes = {
    isHomePage: PropTypes.bool.isRequired,
    isSearchPage: PropTypes.bool.isRequired,
    searchQuery: PropTypes.string,
    isLoadingPhotos: PropTypes.bool.isRequired,
    isUploadFailed: PropTypes.bool.isRequired,
    columns: PropTypes.array.isRequired,
    photos: PropTypes.array.isRequired,
    getMorePhotos: PropTypes.func.isRequired,
    modalPhoto: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    setColumns: PropTypes.func.isRequired,
    setModalOpenFlag: PropTypes.func.isRequired,
    setModalPhoto: PropTypes.func.isRequired
}

export default PhotoGrid;