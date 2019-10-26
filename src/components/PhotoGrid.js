import React from 'react';
import photos from './mock_data/photos';

class PhotoGrid extends React.Component {
    constructor(props){
        super(props)
    }

    renderColumn=(colNum)=>{
        let columnPhotos = photos.items.filter((item,index)=>{
            return (index%4===colNum)
        })
        return columnPhotos.map((item)=>{
            return(
                <div className="Column-item" key={item.id}>
                    <img key={item.id} src={`${item.src.original}`} alt=""/>
                    <div className="Column-item-content">
                        <a href={`${item.photographer_url}`} target="_blank">
                            {`${item.photographer}`}
                        </a>
                        <button className="transparent-btn">
                            <img src="./n-active-like-btn.svg" width="24" height="24" alt=""/>
                            {item.liked && <img src="./active-like-btn.svg" width="24" height="24" alt=""/>}
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

    render() {
        //number of columns depends on window width
        const columns=[0,1,2,3];
        return(
            <>
                <section className="Photo-grid">
                    <div className="Photo-grid-title">
                        <h2>{'Free Stock Photos'}</h2>
                    </div>
                    <div className="Grid-container">
                        {this.renderContainerColumns(columns)}
                    </div>
                </section>
            </>
        )
    }
}

export default PhotoGrid;