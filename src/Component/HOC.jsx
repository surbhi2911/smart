import React from 'react'
import Header from './Header'
import Footer from './Footer'

function HOC(Component) {
    function NewComponent() {
        return (
            <>
                <Header />
                <Component />
                <Footer />
            </>
        )
    }
    return NewComponent

}

export default HOC