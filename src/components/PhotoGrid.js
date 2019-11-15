import React from 'react';
import PropTypes from 'prop-types';
import {photos} from '../assets/mock_data/photos';
import Modal from './Modal';
import notLikedBtn from '../assets/icons/n-active-like-btn.svg';
import likedBtn from '../assets/icons/active-like-btn.svg';

class PhotoGrid extends React.Component {
    constructor(props){
        super(props)
        this.handleResize();
    }

    renderColumn=(colNum,colLen)=>{
        let columnPhotos = photos.filter((item,index)=>{
            return (index%colLen===colNum)
        })
        return columnPhotos.map((photo)=>{
            return(
                <div className="Column-item" key={photo.id} id={photo.id} onClick={this.handleGridItemClicked}>
                    <img className="Column-item-img" src={`${photo.src.original}`} alt=""/>
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
        const {setModalOpenFlag, setModalPhoto} = this.props;
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

    componentDidMount = ()=>{
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount= ()=>{
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        const {columns, isHomePage, isSearchPage} = this.props;
        return(
            <>
                <section className="Photo-grid" style={isSearchPage?{top:'57px'}:{top:'0'}}>
                    <div className="Photo-grid-title">
                        {isHomePage && <h2>{'Free Stock Photos'}</h2>}
                        {isSearchPage && <h1>{'Search results'}</h1>}
                    </div>
                    <div className="Grid-container">
                        {this.renderContainerColumns(columns)}
                    </div>
                </section>
                {this.props.isModalOpen && <Modal modalPhoto={this.props.modalPhoto} setModalOpenFlag={this.props.setModalOpenFlag} />}
            </>
        )
    }
}

PhotoGrid.propTypes = {
    isHomePage: PropTypes.bool.isRequired,
    isSearchPage: PropTypes.bool.isRequired,
    searchCategory: PropTypes.string.isRequired,
    isLoadingPhotos: PropTypes.bool.isRequired,
    columns: PropTypes.array.isRequired,
    photos: PropTypes.object.isRequired,
    modalPhoto: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    setColumns: PropTypes.func.isRequired,
    setModalOpenFlag: PropTypes.func.isRequired,
    setModalPhoto: PropTypes.func.isRequired
}

export default PhotoGrid;