import React from 'react';
import download from 'downloadjs';

class Modal extends React.Component{
    constructor(props){
        super(props)

        this.handleDownloadPhoto = this.handleDownloadPhoto.bind(this);
        this.handleCloseModal=this.handleCloseModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDownloadPhoto=(e)=>{
        fetch(e.target.value)
            .then(res => res.blob())
            .then(blob => download(blob))
    }

    handleSubmit=(e)=>{
        e.preventDefault();

    }

    handleCloseModal=(e)=>{
        if (e.target.className === "Modal" || e.target.className === "close-btn")
            this.props.closeModal();
    }

    render() {
        return(
            <>
                <div className="Modal" onClick={this.handleCloseModal}>
                    <span className="close-btn">&times;</span>
                    <div className="Modal-content">
                        <div className="Modal-action-bar">
                            <a className="modal-like-btn">
                                <img src="./n-active-like-btn-black.svg" width="24" height="24" alt=""/>
                                {this.props.modalPhoto.liked &&
                                <img src="./active-like-btn.svg" width="24" height="24" alt=""/>}
                            </a>
                            <div className="Modal-download">
                                <button className="transparent-btn download-btn" onClick={this.handleDownloadPhoto}
                                        value={this.props.modalPhoto.src.original}>
                                    {'Free Download'}
                                </button>
                                <div className="Modal-dropdown">
                                    <div className="dropdown-btn">
                                        <img src="./dropdwn-icon.svg" width="24" height="24" alt=""/>
                                    </div>
                                    <div className="dropdown-content">
                                        <div className="dropdown-content-pointer"/>
                                        <form onSubmit={this.handleSubmit}>
                                            <h3>Choose a size:</h3>
                                            <ul>
                                                <li>
                                                    <input type="radio" name="size"
                                                           value={this.props.modalPhoto.src.original}/>
                                                    <span><strong>Original</strong></span>
                                                </li>
                                                <li>
                                                    <input type="radio" name="size"
                                                           value={this.props.modalPhoto.src.large}/>
                                                    <span><strong>Large</strong></span>
                                                </li>
                                                <li>
                                                    <input type="radio" name="size"
                                                           value={this.props.modalPhoto.src.medium}/>
                                                    <span><strong>Medium</strong></span>
                                                </li>
                                                <li>
                                                    <input type="radio" name="size"
                                                           value={this.props.modalPhoto.src.small}/>
                                                    <span><strong>Small</strong></span>
                                                </li>
                                            </ul>
                                            <div className="dropdown-footer">
                                                <input className="download-btn" type="submit"
                                                        value="Free Download"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Modal-photo">
                            <img src={this.props.modalPhoto.src.original} alt=""/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Modal;