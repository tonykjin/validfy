import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default class Header extends React.Component {
    render() {
        return(
            <CSSTransition
            in={true}
            appear={true}
            timeout={200}
            classNames='fade container'>
                <div className="header banner row-fluid">
                    <div className="col" id="logo"></div>
                    <div className="col logo-text">Validfy</div>
                    <div className="col hButton">Home</div>
                    <div className="col hButton">About</div>
                    <div className="col hButton">Team</div>
                    <div className="col hButton">Sign Up</div>
                    <div className="col hButton">Log In</div>
                </div>
            </CSSTransition>
        )
    }
}