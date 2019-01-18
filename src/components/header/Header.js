import React from 'react';
import './css/header.css'
class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={'Header'}>
                <span className={'headerName'}>{this.props.headerText.headerName}</span>
            </div>
        )
    }
}

export default Header;