import React, {Component} from "react";
import {init} from "ityped";
import './Typing.css'

export default class Typing extends Component {
    componentDidMount() {
        const myElement = document.querySelector(".typed-text");
        init(myElement, {
            showCursor: false,
            strings: this.props.text,
        });
    }

    render() {
        return <span className="typed-text"/>;
    }
}