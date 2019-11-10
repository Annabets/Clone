import React from 'react';
import PropTypes from 'prop-types';
import randomImage from '../assets/mock_data/hero_image';
import {items} from '../assets/categories';
import srchIcon from '../assets/icons/search-icon-black.svg';

class Hero extends React.Component {
    constructor(props){
        super(props)
    }

    renderTags = ()=>{
        let i, tags=[];
        while(tags.length<7){
            i = Math.floor(Math.random() * 39);
            if(!tags.some((value)=>{return value===items[i]})){
                tags.push(items[i]);
            }
        }
        return tags.map((item,index)=>{
            return(
                <li key={index}><a href={`/search/${item}`}>{item}</a></li>
            )
        })
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        return(
            <>
                <section className="Hero-container" style={{backgroundImage: `url(${randomImage.photos[0].src.original})`}}>
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
                        <a href={`${randomImage.photos[0].photographer_url}`}
                           target="_blank">{`Photo by ${randomImage.photos[0].photographer}`}</a>
                    </div>
                </section>
            </>
        )
    }
}

Hero.propTypes = {
    photo: PropTypes.object.isRequired
}

export default Hero;