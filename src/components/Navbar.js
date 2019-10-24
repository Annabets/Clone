import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <>
                <header className="Navbar">
                    <div className="Navbar-container">
                        <div className="Navbar-container-item">
                            <div className="Navbar-navig">
                                <a className="Navbar-navig-logo" title="Free Stock Photos" href="/">
                                    <div className="Navbar-navig-logo-img">
                                        <img src="./logo.svg" width="32" height="32" alt=""/>
                                    </div>
                                    <div className="Navbar-navig-logo-txt">{'Pexels'}</div>
                                </a>
                            </div>
                            <div className="Navbar-search">
                                <form role="search">
                                    <div className="text-input-with-btn">
                                        <input id="nav-srch" type="search" placeholder="Search for free photos" required="required"/>
                                        <button className="transparent-btn" type="submit" title="Search for stock photos">
                                            <img src="./search-icon.svg" width="20" height="20" alt=""/>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="Navbar-container-item">
                            {/*Collection section*/}
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Navbar;