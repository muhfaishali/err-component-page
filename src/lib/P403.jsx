import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/p403.css';

class P403 extends Component {
    static propTypes = {
        textTitle: PropTypes.string,
        textDescription: PropTypes.string
    }

    render() {
        const { textTitle, textDescription, image } = this.props;
        return (
            <div className="rowN">
                <div className="column">
                    <img src={image} alt="404 Not Found" className="img-style" />
                </div>
                <div className="column">
                    <h1 className="font-404">{textTitle}</h1>
                    <p className="text-description">{textDescription}</p>
                </div>
            </div>
        )
    }
}

export default P403;