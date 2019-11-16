import React from 'react';
import PropTypes from 'prop-types';
import srchIcon from '../assets/icons/search-icon-black.svg';

class Hero extends React.Component {
    constructor(props){
        super(props)
        props.getHeroPhoto()
    }

    renderTags = ()=>{
        return this.props.tags.map((item,index)=>{
            return(
                <li key={index}><a href={`/search/${item}`}>{item}</a></li>
            )
        })
    }

    render() {
        const {photo} = this.props;
        return(
            <>
                <section className="Hero-container" style={{backgroundImage:photo.src?`url(${photo.src.original})`:null}}>
                    <div className="Hero-content">
                        <h1 className="Hero-title">{'The best free stock photos & videos shared by talented creators.'}</h1>
                        <div className="Hero-search">
                            <form role="search">
                                <div className="text-input-with-btn">
                                    <input id="hero-srch" type="search" placeholder="Search for free photos" required="required"/>
                                    <button className="transparent-btn search-btn" type="submit" title="Search for stock photos">
                                        <img src={srchIcon} width="20" height="20" alt=""/>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <ul className="Hero-search-tags-container">
                            <li id="sggst">
                                {'Suggested: '}
                            </li>
                            <li>
                                <ul className="search-categories">
                                    {this.renderTags()}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="Hero-footer">
                        {photo.photographer && <a href={`${photo.photographer_url}`}
                           target="_blank">{`Photo by ${photo.photographer}`}</a>}
                    </div>
                </section>
            </>
        )
    }
}

Hero.propTypes = {
    tags: PropTypes.array.isRequired,
    photo: PropTypes.object.isRequired,
    getHeroPhoto: PropTypes.func.isRequired
}

export default Hero;