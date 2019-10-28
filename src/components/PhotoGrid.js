import React from 'react';
import photos from './mock_data/photos';
import Modal from './Modal';
import randomImage from './mock_data/hero_image';

class PhotoGrid extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            //uncomment and remove setState for modalPhoto to see how download works
            //modalPhoto: randomImage.photos[0],
            modalPhoto: {},
            isModalOpen: false
        }

        this.handleGridItemClicked = this.handleGridItemClicked.bind(this);
    }

    renderColumn=(colNum)=>{
        let columnPhotos = photos.items.filter((item,index)=>{
            return (index%4===colNum)
        })
        return columnPhotos.map((item)=>{
            return(
                <div className="Column-item" key={item.id} id={item.id} onClick={this.handleGridItemClicked}>
                    <img className="Column-item-img" src={`${process.env.PUBLIC_URL}/${item.src.original}`} alt=""/>
                    <div className="Column-item-content">
                        <a href={`${item.photographer_url}`} target="_blank">
                            {`${item.photographer}`}
                        </a>
                        <button className="transparent-btn">
                            <img src={`${process.env.PUBLIC_URL}/n-active-like-btn.svg`} width="24" height="24" alt=""/>
                            {item.liked && <img src={`${process.env.PUBLIC_URL}/active-like-btn.svg`} width="24" height="24" alt=""/>}
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
                modalPhoto: photos.items.find((item)=>{return item.id === Number(e.currentTarget.id)}),
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
        return(
            <>
                <section className="Photo-grid">
                    <div className="Photo-grid-title">
                        {window.location.pathname===`/` && <h2>{'Free Stock Photos'}</h2>}
                        {window.location.pathname.includes(`/search`) && <h1>{'Search results'}</h1>}
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