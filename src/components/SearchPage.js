import React from 'react';
import Navbar from './Navbar';
import PhotoGrid from './PhotoGrid';

class SearchPage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <>
                <Navbar/>
                <PhotoGrid/>
            </>
        )
    }
}

export default SearchPage;