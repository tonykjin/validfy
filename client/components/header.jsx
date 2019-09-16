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
                    <div className="col-2" id="logo"></div>
                    <div className="col-2 hButton">Home</div>
                    <div className="col-2 hButton">About</div>
                    <div className="col-2 hButton">Team</div>
                </div>
            </CSSTransition>
        )
    }
}