import React from 'react';
import PhotoGrid from './PhotoGrid';

class SearchPage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <>
                <PhotoGrid/>
            </>
        )
    }
}

export default SearchPage;