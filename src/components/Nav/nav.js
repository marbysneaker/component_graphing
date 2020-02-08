import React, { Component } from 'react';
import './nav.css'


class Nav extends Component {
    render(){
        return(
            <div type="checkbox" keys={this.props.keys} onClick={this.props.onClick}>
            <label>{this.props.country}</label>
            </div>
            );
        }
    }        
    export default Nav;
    