import React, { Component } from 'react';
import './Background.css';

class Background extends Component {
    render() {
        const { name, link } = this.props.bg;
        return (
            <div className="Background">
                <i className="material-icons">wallpaper</i>
                <span className="name">
                    <a href={ link } target='_blank'> { name } </a>
                </span>
            </div>
        );
    }
}

export default Background;
