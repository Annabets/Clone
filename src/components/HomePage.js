import React from 'react';
import Hero from './Hero';

class HomePage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <>
                <Hero/>
            </>
        )
    }
}

export default HomePage;