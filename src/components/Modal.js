import React from 'react';
import PropTypes from 'prop-types';
import download from 'downloadjs';
import notLikedBtn from '../assets/icons/n-active-like-btn-black.svg';
import likedBtn from '../assets/icons/active-like-btn.svg';
import dropdwnBtn from '../assets/icons/dropdwn-icon.svg';

class Modal extends React.Component{
    constructor(props){
        super(props)
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
            this.props.setModalOpenFlag(false);
    }

    render() {
        const {modalPhoto, handleLikeBtnClick} = this.props;
        return(
            <>
                <div className="Modal" onClick={this.handleCloseModal}>
                    <span className="close-btn">&times;</span>
                    <div className="Modal-content">
                        <div className="Modal-action-bar">
                            <a className="modal-like-btn" onClick={handleLikeBtnClick}>
                                {modalPhoto.liked ||
                                <img src={notLikedBtn} width="24" height="24" alt=""/>}
                                {modalPhoto.liked &&
                                <img src={likedBtn} width="24" height="24" alt=""/>}
                            </a>
                            <div className="Modal-download">
                                <button className="transparent-btn download-btn" onClick={this.handleDownloadPhoto}
                                        value={modalPhoto.src.original}>
                                    {'Free Download'}
                                </button>
                                <div className="Modal-dropdown">
                                    <div className="dropdown-btn">
                                        <img src={dropdwnBtn} width="24" height="24" alt=""/>
                                    </div>
                                    <div className="dropdown-content">
                                        <div className="dropdown-content-pointer"/>
                                        <form onSubmit={this.handleSubmit}>
                                            <h3>Choose a size:</h3>
                                            <ul>
                                                <li>
                                                    <input type="radio" name="size"
                                                           value={modalPhoto.src.original}/>
                                                    <span><strong>Original</strong></span>
                                                </li>
                                                <li>
                                                    <input type="radio" name="size"
                                                           value={modalPhoto.src.large}/>
                                                    <span><strong>Large</strong></span>
                                                </li>
                                                <li>
                                                    <input type="radio" name="size"
                                                           value={modalPhoto.src.medium}/>
                                                    <span><strong>Medium</strong></span>
                                                </li>
                                                <li>
                                                    <input type="radio" name="size"
                                                           value={modalPhoto.src.small}/>
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
                            <img src={`${modalPhoto.src.original}`} alt=""/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

Modal.propTypes = {
    modalPhoto: PropTypes.object.isRequired,
    setModalOpenFlag: PropTypes.func.isRequired,
    handleLikeBtnClick: PropTypes.func.isRequired
}

export default Modal;