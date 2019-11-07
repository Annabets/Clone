import React from 'react';
import {photos} from '../assets/mock_data/photos';
import Modal from './Modal';
import notLikedBtn from '../assets/icons/n-active-like-btn.svg';
import likedBtn from '../assets/icons/active-like-btn.svg';

class PhotoGrid extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            modalPhoto: {},
            isModalOpen: false
        }

        this.handleGridItemClicked = this.handleGridItemClicked.bind(this);
    }

    renderColumn=(colNum)=>{
        let columnPhotos = photos.filter((item,index)=>{
            return (index%4===colNum)
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
                <div key={index} className="Grid-column">{this.renderColumn(index)}</div>
            )
        })
    }

    handleGridItemClicked = (e)=>{
        if(e.target.className === "Column-item-content" || e.target.className === "Column-item-img"){
            this.setState({
                modalPhoto: photos.find((photo)=>{return photo.id === Number(e.currentTarget.id)}),
                isModalOpen:true
            })
        }
    }

    handleCloseModal = ()=>{
        this.setState({
            isModalOpen: false
        })
    }

    render() {
        //number of columns depends on window width
        const columns=[0,1,2,3];
        const isHomePage = window.location.pathname===`/`;
        const isSearchPage = window.location.pathname.includes(`/search`);
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
                {this.state.isModalOpen && <Modal modalPhoto={this.state.modalPhoto} closeModal={this.handleCloseModal} />}
            </>
        )
    }
}

export default PhotoGrid;